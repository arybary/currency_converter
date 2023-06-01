import { Action, createReducer, on } from '@ngrx/store';
import * as ConverterActions from '../actions/converter.actions';

export const converterFeatureKey = 'converter';

export interface ConverterState {
  amountTo: number;
  amountFrom: number;
  currencyTo: string;
  currencyFrom: string;
  rate: number;
}

const initialState: ConverterState = {
  amountTo: 1,
  amountFrom: 0,
  currencyTo: 'USD',
  currencyFrom: 'UAH',
  rate: 1,
};

const converterReducer = createReducer(
  initialState,
  on(ConverterActions.initConverter, (state) => state),
  on(ConverterActions.setAmountTo, (state, { amount }) => ({
    ...state,
    amountTo: amount,
  })),
  on(ConverterActions.setAmountFrom, (state, { amount }) => ({
    ...state,
    amountFrom: amount,
  })),

  on(
    ConverterActions.setSelectedCurrency,
    (state, { currencyConvert, currency }) => ({
      ...state,
      [currencyConvert]: currency,
    })
  ),
  on(ConverterActions.getRate, (state, { rate }) => ({
    ...state,
    rate,
  }))
);

export function reducer(state: ConverterState | undefined, action: Action) {
  return converterReducer(state, action);
}
