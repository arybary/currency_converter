import { NgModule } from '@angular/core';
import { CurrencyForIconPipe } from './pipe/currency.pipe';

const pipes = [CurrencyForIconPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class SharedModule {}
