import { Pipe, PipeTransform } from '@angular/core';
import { ExchangeRate } from '../models/exchange-rate.model';

@Pipe({ name: 'uahExchangeRate' })
export class UahExchangeRate implements PipeTransform {
  transform(exchangeRate: ExchangeRate | null, pair: string): number {
    if (!exchangeRate) {
        return 0;
    } 
    return exchangeRate.rates['UAH'] / exchangeRate.rates[pair];
  }
}