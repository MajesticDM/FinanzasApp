import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/servicios/api.service'; 
//import * as Parse from 'parse'
declare var require: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  result: string = '';
  data: unknown;
  apiURL: string = environment.urlAPI;

  constructor(private plataform: Platform, private http: HttpClient, private api: ApiService) {
    //Back4App
    //     const Parse = require('parse');
    //     try{
    //       let Debts = Parse.Object.extend("Debts");
    //       const debts = new Debts();

    // debts.set("Debt_name", "Prueba_Ionic");
    // debts.set("Creation_date", new Date());
    // debts.set("Final_payment_amount", 10);
    // debts.set("Number_of_payments", 5);
    // debts.set("Payment_frecuency", "Monthly")
    // debts.set("Payment_amount_based_on_frecuency", 2)
    // debts.set("Payment_goes_to", "Ionic")
    // debts.set("Is_Necesary", true)
    // debts.set("Early_Payment", false)

    // debts.save()
    // .then((debt: any) => {
    //   // Success
    //   alert('New object created with objectId: ' + debt.id);
    // }, (error: any) => {
    //   // Save fails
    //   alert('Failed to create new object, with error code: ' + error.message);
    // });
    //     }catch(error){
    // console.log(error)
    //     }

    //     Parse.serverURL = 'https://parseapi.back4app.com/';
    //     Parse.initialize("3uo8xqTCCS4q4YfHNLX3Z9CQRPoPSDiQsgmsYivr","hBtr2jgiYGIjuAWFzMjH7GMMzKYdPyEpjGooXBmX");

    //Node.js

    this.api.httpGet('posts').subscribe((res) => {
      console.log(res);
    });
  }
}
