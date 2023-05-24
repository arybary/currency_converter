import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { currencyFeatureKey, reducer } from './store/reducers/currency.reducer';
import { CurrencyEffects } from './store/effects/currencies.effects';
import { CurrencyApiService } from './services/currency.service';
import { CurrencyFacade } from './store/currency.facade';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(currencyFeatureKey, reducer, {
      metaReducers,
    }),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
  providers: [CurrencyFacade],
})
export class CoreModule {}
