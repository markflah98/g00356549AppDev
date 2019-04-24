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
export class TeamsPageModule {}; 