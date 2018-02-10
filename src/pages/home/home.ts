import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Subscription } from "rxjs/Subscription";
import { EcgProvider } from "../../providers/ecg/ecg"

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [
        EcgProvider
    ]
})
export class HomePage {

    public bpm_value: number;
    @ViewChild('hrCanvas') hrCanvas;
    @ViewChild('rrCanvas') rrCanvas; 

    hrChart: any;
    rrChart: any;
    maxResults = 5;
    count = 0;

    constructor(public navCtrl: NavController, private ecgProvider: EcgProvider) {
        setInterval(() => {this.addChartData(this.rrChart, this.count++, Math.floor(Math.random()*20 + 5))},1000);
        setInterval(() => {this.addChartData(this.hrChart, this.count++, Math.floor(Math.random()*20 + 5))},1000);
        setInterval(() => {this.modifyBPM(Math.floor(Math.random()*110 + 5))},1000);
    }

    ionViewDidLoad() {

        this.ecgProvider.getLatestData().subscribe(
            data => {
                console.log(data);
            }, error => {
                console.log(error);
            });

        this.hrChart = new Chart(this.hrCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7],
                datasets: [{
                    label: 'DD',
                    data: [12, 19, 3, 5, 2, 3, 40, 111, 309, 100],

                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero:true
                        },
                        gridLines: {
                            display: false,
                        }
                    }],
                    xAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero:true
                        },
                        gridLines: {
                            display: false,
                        }
                    }]
                }
            }

        });


        this.rrChart = new Chart(this.rrCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [{
                    data: [12, 19, 3, 5, 2, 3, 40, 111, 309, 100],

                    backgroundColor: 'rgba(129, 199, 132, 0.4)',
                    borderColor: 'rgba(102,187,106,1)',
                    borderWidth: 1
                }]
            },

            options: {
                legend: { display: false }, 
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });

    }


    addChartData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach(dataset => dataset.data.push(data));
        if(chart.data.labels.length > this.maxResults) {
            chart.data.labels.splice(0, 1);
            chart.data.datasets.forEach(dataset => dataset.data.splice(0,1));
        }
        chart.update();
    }

    modifyBPM(data) {
        this.bpm_value = data;
    }
}
