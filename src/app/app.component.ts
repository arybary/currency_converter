import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrencyState } from './core/store/reducers/currency.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'currency_converter';

  constructor(private readonly store: Store<CurrencyState>) {}
}
