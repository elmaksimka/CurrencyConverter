import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from '../models/exchange-rate.model';
import { Observable } from 'rxjs';
import { EXCHANGE_RATES_URL } from '../utils/routes';

@Injectable()
export class ExchangeRateRestService {
    
    constructor(private http: HttpClient) { }

    public getRates(): Observable<ExchangeRate> {
        return this.http.get<ExchangeRate>(EXCHANGE_RATES_URL);
    }
}