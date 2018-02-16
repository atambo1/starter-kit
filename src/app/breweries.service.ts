import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BreweriesService {

  constructor(private http: Http) { }

  getBreweries(): Observable<string> {
    return this.http.get('/breweries.json', { cache: true })
      .pipe(
        map((res: Response) => res.json()),
        catchError(() => of('Mah breweries!! :-('))
      );
  }

}
