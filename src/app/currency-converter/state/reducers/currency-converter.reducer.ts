import { createReducer, on } from '@ngrx/store';
import * as CurrencyConverterActions from '../actions/currency-converter.actions';

export interface CurrencyConverterState {
  firstAmount: number;
  firstCurrency: string;
  secondAmount: number;
  secondCurrency: string;
}

const initialState: CurrencyConverterState = {
  firstAmount: 0,
  firstCurrency: 'UAH',
  secondAmount: 0,
  secondCurrency: 'USD',
};

export const currencyConverterReducer = createReducer(
  initialState,
  on(CurrencyConverterActions.setFirstAmount, (state, { amount }) => ({ ...state, firstAmount: amount })),
  on(CurrencyConverterActions.setFirstCurrency, (state, { currency }) => ({ ...state, firstCurrency: currency })),
  on(CurrencyConverterActions.setSecondAmount, (state, { amount }) => ({ ...state, secondAmount: amount })),
  on(CurrencyConverterActions.setSecondCurrency, (state, { currency }) => ({ ...state, secondCurrency: currency }))
);
