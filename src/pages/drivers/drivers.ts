import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Drivers_2Page } from './../drivers-2/drivers-2';
/**
 * Generated class for the DriversPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html',
})
export class DriversPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad DriverssPage');

}}
