import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAmountComponent {
  @Input() label: any;
  @Input() amount: any;
  @Output() amountChange = new EventEmitter<number>();

  onAmountChange(): void {
    this.amountChange.emit(this.amount);
  }
}
