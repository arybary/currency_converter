import { Component, OnInit } from '@angular/core';
import { CurrencyFacade } from './core/store/currency.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency_converter';

  constructor(private readonly currencyFacada: CurrencyFacade) {}
  ngOnInit(): void {
    this.currencyFacada.loadCurrency();
  }
}
