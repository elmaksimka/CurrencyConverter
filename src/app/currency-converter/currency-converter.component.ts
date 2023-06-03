import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChangeType, currencies, initialFromRate, initialToRate } from '../models/exchange-rate.model';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent implements OnInit {
  
  constructor(private exchangeRateService: ExchangeRateService) {}

  public currencyFrom: number = 0;
  public currencyTo: number = 0;

  public currencyFromRate: string = initialFromRate;
  public currencyToRate: string = initialToRate;
 
  public readonly currencies: string[] = currencies;

  public ngOnInit(): void {
    this.exchangeRateService.getExchangeRate();
  }

  public handleSelectChange($event: Event, type: ChangeType): void {
    switch(type) {
      case 'from':
        this.currencyFromRate = this.exchangeRateService.getRate($event);
        this.currencyTo = this.getValue(type);
        break;
      case 'to':
        this.currencyToRate = this.exchangeRateService.getRate($event);
        this.currencyFrom = this.getValue(type);
        break;
      default:
        const errorType: never = type;
        throw new Error(errorType);
    }
  }

  public handleValueChange($event: Event, type: ChangeType): void {
    switch (type) {
      case 'from':
        this.currencyFrom = this.exchangeRateService.getCurrency($event);
        this.currencyTo = this.getValue(type);
        break;
      case 'to':
        this.currencyTo = this.exchangeRateService.getCurrency($event);
        this.currencyFrom = this.getValue(type);
        break;
      default:
        const errorType: never = type;
        throw new Error(errorType);
    }
  }

  private getValue(type: ChangeType): number {
    return this.exchangeRateService.getCurrencyValue({
      type,
      currencyFrom: this.currencyFrom,
      currencyTo: this.currencyTo,
      currencyFromRate: this.currencyFromRate,
      currencyToRate: this.currencyToRate,
    });
  }
}
