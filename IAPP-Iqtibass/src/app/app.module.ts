
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';
import { FavoritesPage } from './../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from '../services/quotes.service';
import { SettingsService } from '../services/settings.service';


@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
