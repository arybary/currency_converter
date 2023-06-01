import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/core/model/currency.model';
import { CurrencyFacade } from 'src/app/core/state/currency.facade';
import { SelectedCurrency } from '../currency-converter.component';

@Component({
  selector: 'select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCurrencyComponent {
  @Input() selectedCurrency: any;
  @Input() label: any;

  currencies$: Observable<Currency[]> = this.currencyFacade.currencies$;

  constructor(private readonly currencyFacade: CurrencyFacade) {}

  @Output() currencyChange = new EventEmitter<SelectedCurrency>();

  onCurrencyChange(): void {
    this.currencyChange.emit({
      currency: this.selectedCurrency,
      convertCurrency: this.label,
    });
  }
}
