import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';

import { BreweriesService } from './breweries.service';

describe('BreweriesService', () => {
  let breweriesService: BreweriesService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      BreweriesService,
      MockBackend,
	  BaseRequestOptions,
	  {
	  	provide: Http,
	  	useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
	    return new Http(backend, defaultOptions);
	  },
	  deps: [MockBackend, BaseRequestOptions]
	  }
      ]
    });
  });

  it('should be created', inject([BreweriesService], (service: BreweriesService) => {
    expect(service).toBeTruthy();
  }));
});
