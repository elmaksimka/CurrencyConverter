import { Injectable } from '@angular/core';
import { ExchangeRateRestService } from './exchange-rate-rest.service';
import { filter, first } from 'rxjs';
import { ChangeType, ExchangeRate } from '../models/exchange-rate.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {

    constructor(private exchangeRateRestService: ExchangeRateRestService) {}

    private rates!: Record<string, number>;

    public getExchangeRate(): void {
        this.exchangeRateRestService
        .getRates()
        .pipe(first(), filter(Boolean))
        .subscribe((response: ExchangeRate) => {
          this.rates = response?.rates;
        });
    }

    public getCurrencyValue = (args: { 
        type: ChangeType,
        currencyFrom: number,
        currencyTo: number,
        currencyToRate: string,
        currencyFromRate: string,
    }): number => {
        switch (args?.type) {
          case 'from':
            return this.calculateCurrencyRate({ 
                firstRate: args.currencyToRate, 
                secondRate: args.currencyFromRate,
                quantity: args.currencyFrom
            });
          case 'to':
            return this.calculateCurrencyRate({ 
                firstRate: args.currencyFromRate, 
                secondRate: args.currencyToRate,
                quantity: args.currencyTo
            });
        }
    }

    public getRate = (event: Event): string => 
        (event?.target as HTMLInputElement)?.value as unknown as  string;
    
    public getCurrency = (event: Event): number => 
        (event?.target as HTMLInputElement)?.value as unknown as number;

    private calculateCurrencyRate = (args: {
        firstRate: string,
        secondRate: string,
        quantity: number,
    }): number =>
        (this.rates[args.firstRate] / this.rates[args.secondRate]) * args.quantity;

}