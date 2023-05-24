import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrencyFacade } from './core/store/currency.facade';
import { CurrencyState } from './core/store/reducers/currency.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency_converter';

  constructor(private readonly currencyFacada: CurrencyFacade) {}
  ngOnInit(): void {
    this.currencyFacada.loadCurrency()
  }
}
