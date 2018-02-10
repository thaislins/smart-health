import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EcgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class EcgProvider {

      constructor(public http: HttpClient) {
        console.log('Hello EcgProvider Provider');
    }

    getLatestData() {
        return this.http.get("http://localhost:3000/v1/data");
    }
}
