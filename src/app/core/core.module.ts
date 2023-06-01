import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCurrency from './store/reducers/currency.reducer';
import { CurrencyEffects } from './store/effects/currency.effects';
import { CurrencyFacade } from './store/currency.facade';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    StoreModule.forFeature(
      fromCurrency.currencyFeatureKey,
      fromCurrency.reducer
    ),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
  providers: [CurrencyFacade],
})
export class CoreModule {}
