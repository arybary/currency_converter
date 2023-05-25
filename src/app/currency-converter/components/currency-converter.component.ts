import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrencyFacade } from 'src/app/core/store/currency.facade';


@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent implements OnInit {
  constructor(private readonly currencyFacada: CurrencyFacade) {}
  ngOnInit(): void {
    this.currencyFacada.loadCurrency();
  }
}
