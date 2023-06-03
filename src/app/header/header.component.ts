import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { ExchangeRate } from '../models/exchange-rate.model';
import { ExchangeRateRestService } from '../services/exchange-rate-rest.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor(private exchangeRateService: ExchangeRateRestService) {}

  public exchangeRate$!: Observable<ExchangeRate>;

  public ngOnInit(): void {
    this.exchangeRate$ = this.exchangeRateService
      .getRates()
      .pipe(filter(Boolean));
  }

}
