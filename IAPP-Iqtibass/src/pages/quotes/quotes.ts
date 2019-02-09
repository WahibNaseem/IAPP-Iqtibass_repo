import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Quote } from '../../_models/quote.interface';
import { QuotesService } from './../../services/quotes.service';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string; quotes: Quote[]; icon: string };

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService,
    private socialSharing: SocialSharing
  ) {}

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
          text: 'Cancel',
          handler: () => {}
        },
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    const confirm = this.alertCtrl.create({
      title: 'UnFavorite Quote',
      message: 'Sure you want to unfavorite this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancelled');
          }
        },
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.removeQuoteFromFavorites(quote);
          }
        }
      ]
    });
    confirm.present();
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorites(quote);
  }

  onShareSocial(quote:Quote) {
    console.log("Shared");
    this.socialSharing.share(quote.text + '\n\n' + '"'+ quote.person + '"',null,null,null).then((response: any) => {
       console.log(response);
    }).catch((error) =>{
            console.log(error);
    });
  }
}
