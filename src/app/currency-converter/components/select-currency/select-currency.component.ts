import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCurrencyComponent {

}
