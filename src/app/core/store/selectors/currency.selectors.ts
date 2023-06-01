import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  currencyFeatureKey,
  CurrencyState,
} from '../reducers/currency.reducer';

export const selectCurrencyState =
  createFeatureSelector<CurrencyState>(currencyFeatureKey);

export const selectCurrencyData = createSelector(
  selectCurrencyState,
  (state) => state.currencies
);

export const selectCurrencyLoading = createSelector(
  selectCurrencyState,
  (state) => state.loading
);

export const selectCurrencyError = createSelector(
  selectCurrencyState,
  (state) => state.error
);
