import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './components/currency-converter.component';
import { InputAmountComponent } from './components/input-amount/input-amount.component';
import { SelectCurrencyComponent } from './components/select-currency/select-currency.component';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    InputAmountComponent,
    SelectCurrencyComponent,
  ],
  imports: [CommonModule],
})
export class CurrencyConverterModule {}
