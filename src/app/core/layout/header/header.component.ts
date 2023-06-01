import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../../model/currency.model';
import { CurrencyFacade } from '../../state/currency.facade';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly currencies$: Observable<Currency[]> = this.currencyFacade.currencyForHeader$;

  constructor(private readonly currencyFacade: CurrencyFacade) {}
}
