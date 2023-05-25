import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAmountComponent {

}
