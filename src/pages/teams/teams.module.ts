import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsPage } from './teams';
/*import {InAppBrowser} from './@ionic-native';/*/

@NgModule({
  declarations: [
    TeamsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamsPage),
  ],
})
export class TeamsPageModule {

/*--module.controller('ThisCtrl', function($cordovaInAppBrowser) {

  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  document.addEventListener("deviceready", function () {
    $cordovaInAppBrowser.open('https://en.wikipedia.org/wiki/Scuderia_Ferrari', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });


    $cordovaInAppBrowser.close();--*/

  }; 