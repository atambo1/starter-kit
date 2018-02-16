import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { BreweriesService } from '../breweries.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService,
    BreweriesService
  ]
})
export class HomeModule { }
