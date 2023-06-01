import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './container/currency-converter.component';
import { InputAmountComponent } from './container/input-amount/input-amount.component';
import { SelectCurrencyComponent } from './container/select-currency/select-currency.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {
  converterFeatureKey,
  reducer,
} from './state/reducers/converter.reducer';
import { ConverterFacade } from './state/converter.facade';
import { EffectsModule } from '@ngrx/effects';
import { ConverterEffects } from './state/effects/converter.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    InputAmountComponent,
    SelectCurrencyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CurrencyConverterComponent },
    ]),
    StoreModule.forFeature(converterFeatureKey, reducer),
    EffectsModule.forFeature([ConverterEffects]),
  ],
  providers: [ConverterFacade],
})
export class CurrencyConverterModule {}
