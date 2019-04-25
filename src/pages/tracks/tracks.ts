import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html',
})
export class TracksPage {
 constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksPage');
  }

 aussiebutton() {
   let url='https://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit'
   window.open(url, '_blank');
 }


 bahrainbutton() {
  let url='https://en.wikipedia.org/wiki/Bahrain_International_Circuit'
  window.open(url, '_blank');
}

chinabutton() {
  let url='https://en.wikipedia.org/wiki/Shanghai_International_Circuit'
  window.open(url, '_blank');
}

bakubutton() {
  let url='https://en.wikipedia.org/wiki/Baku_City_Circuit'
  window.open(url, '_blank');
}
}