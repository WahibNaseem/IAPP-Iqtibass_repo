import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('nav') navCtrl: NavController;

  constructor(
    platform: Platform,
   private menuCtrl: MenuController,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  onLoad(page: any) {
    this.navCtrl.setRoot(page);
    this.menuCtrl.close();

  }
}

