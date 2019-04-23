import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriversPage } from './../drivers/drivers';
import { SchedulePage } from './../schedule/schedule';
import { StandingsPage } from './../standings/standings';
import { TeamsPage } from './../teams/teams';
import {TracksPage } from './../tracks/tracks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }

  openDrivers() {
    this.navCtrl.push(DriversPage);
    }

  openSchedule() {
      this.navCtrl.push(SchedulePage);
      }
    
  openStandings() {
      this.navCtrl.push(StandingsPage);
        }

  openTracks() {
      this.navCtrl.push(TracksPage);
        }
  
   openTeams() {
          this.navCtrl.push(TeamsPage);
            }


}
