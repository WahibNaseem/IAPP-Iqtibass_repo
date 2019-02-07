
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';


import { Quote } from "../../_models/quote.interface";
import { QuotesService } from './../../services/quotes.service';

@Component({
  selector:'page-quotes',
  templateUrl:'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[] , icon:string };


  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
     title: 'Add Quote',
    //  subTitle: 'Are you sure?',
     message: 'Sure you want to add this quote?',
     buttons: [
       {
         text: 'Yes, go ahead',
         handler: () => {
           this.quotesService.addQuoteToFavorites(selectedQuote);
         }
       },
       {
         text: 'Cancel',
         handler: () =>{}
       }

    ]
    });
   alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'UnFavorite Quote',
      message: 'Sure you want to unfavorite this?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () =>{
            this.quotesService.removeQuoteFromFavorites(quote);
          }
      },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () =>{
        // console.log('Cancelled');
      }
    }]
    });
    alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorites(quote);
  }


}
