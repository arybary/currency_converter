import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currencyForHeader } from '../../constans';
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

export const selectCurrencyForHeader = createSelector(
  selectCurrencyData,
  (currencies) =>
    currencies.filter(
      (currency) =>
        currency.cc === currencyForHeader.fist ||
        currency.cc === currencyForHeader.second
    )
);
