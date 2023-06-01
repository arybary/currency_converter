import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrencyFacade } from '../state/currency.facade';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  loading$: Observable<boolean> = this.currencyFacada.loading$;

  constructor(private readonly currencyFacada: CurrencyFacade) {}
  ngOnInit(): void {
    this.currencyFacada.loadCurrency();
  }
}
