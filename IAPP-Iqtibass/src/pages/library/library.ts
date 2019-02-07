import { QuotesPage } from './../quotes/quotes';
import { Component, OnInit } from '@angular/core';

import { Quote } from './../../_models/quote.interface';
import mockQuotes from '../../_mock-data/mock-data';

@Component({
   selector: 'page-library',
   templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotesPage = QuotesPage;

  ngOnInit(){
   this.quoteCollection = mockQuotes;
  }
}
