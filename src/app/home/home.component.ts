import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from './quote.service';
//import { BreweriesService } from '../breweries.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'mmmmm... beers';
  
//sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }
  isLoading: boolean;
  p: number = 1;
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'explicit' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quotes: string) => { this.beers = quotes; });
   }

}
