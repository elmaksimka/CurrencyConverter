import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { UahExchangeRate } from './pipes/uah-exchange-rate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExchangeRateRestService } from './services/exchange-rate-rest.service';
import { ExchangeRateService } from './services/exchange-rate.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyConverterComponent,
    UahExchangeRate
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ExchangeRateRestService,
    ExchangeRateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
