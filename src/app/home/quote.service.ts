import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `/beers.json`,
  brewery: ()=> `/breweries.json`
};

export interface RandomQuoteContext {
  // The quote's category: 'nerdy', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.http.get(routes.quote(context), { cache: true })
      .pipe(
        map((res: Response) => res.json()),
        catchError(() => of('Urgent, could not get beers!! :-('))
      );
  }

  getBreweryList(): Observable<string> {
    return this.http.get(routes.brewery(), {cache: true})
      .pipe(
        map((res: Response) => res.json()),
        catchError(() => of (`Shit, we couldn't find the breweries :-()`))
        );
  }

}
