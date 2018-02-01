import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('barCanvas1') barCanvas1;
    @ViewChild('barCanvas2') barCanvas2;

    barChart1: any;
    barChart2: any;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {

        this.barChart1 = new Chart(this.barCanvas1.nativeElement, {

            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7],
                datasets: [{
                    label: 'Heart Rate ',
                    data: [12, 19, 3, 5, 2, 3],

                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
            },

/*            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }*/

        });


        this.barChart2 = new Chart(this.barCanvas2.nativeElement, {

            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [{
                    data: [12, 19, 3, 5, 2, 3, 40, 111],

                    backgroundColor: 'rgba(255, 29, 111, 0.4)',
                    borderColor: 'rgba(255,50,132,1)',
                    borderWidth: 1
                }]
            },

/*            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }*/

        });

    }
}
