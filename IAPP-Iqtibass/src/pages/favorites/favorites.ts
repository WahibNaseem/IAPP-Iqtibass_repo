import { SettingsService } from "./../../services/settings.service";
import { Component } from "@angular/core";
import { ModalController, MenuController } from "ionic-angular";

import { Quote } from "../../_models/quote.interface";
import { QuotePage } from "./../quote/quote";
import { QuotesService } from "./../../services/quotes.service";

@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private settingsService: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoritesQuotes();
  }

  onViewQuote(quote: Quote) {
    let modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoritesQuotes();
    // const found = this.quotes.findIndex((quoteEl: Quote) => {
    //     return quoteEl.id === quote.id;
    // });

    // this.quotes.splice(found,1);
  }

  // onMenuLoad() {
  //   this.menuCtrl.open();
  // }

  getBackground() {
    return this.settingsService.isAltBackground()
      ? 'altQuoteBackground'
      : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
