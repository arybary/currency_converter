import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  converterFeatureKey,
  ConverterState,
} from '../reducers/converter.reducer';

export const selectConverterState =
  createFeatureSelector<ConverterState>(converterFeatureKey);

export const selectAmountTo = createSelector(
  selectConverterState,
  (state) => state.amountTo
);
export const selectAmountFrom = createSelector(
  selectConverterState,
  (state) => state.amountFrom
);

export const selectCurrencyTo = createSelector(
  selectConverterState,
  (state) => state.currencyTo
);
export const selectCurrencyFrom = createSelector(
  selectConverterState,
  (state) => state.currencyFrom
);
export const selectRate = createSelector(
  selectConverterState,
  (state) => state.rate
);
