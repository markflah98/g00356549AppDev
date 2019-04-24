import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DriversPage } from '../pages/drivers/drivers';
import { TeamsPage } from '../pages/teams/teams';
import { SchedulePage } from '../pages/schedule/schedule';
import { StandingsPage } from '../pages/standings/standings';
import { TracksPage } from '../pages/tracks/tracks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DriversPage,
    TeamsPage,
    SchedulePage,
    StandingsPage,
    TeamsPage,
    TracksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DriversPage,
    TeamsPage,
    SchedulePage,
    StandingsPage,
    TeamsPage,
    TracksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
