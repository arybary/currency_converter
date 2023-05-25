import { Action, createReducer, on } from '@ngrx/store';
import { Currency } from '../../model/currency.model';
import * as CurrencyActions from '../actions/currency.actions';

export const currencyFeatureKey = 'currency';

export interface CurrencyState {
  currencies: Currency[];
  loaded: boolean;
  error?: string | null;
}

const initialCurrenciestate: CurrencyState = {
  currencies: [],
  loaded: false,
  error: null,
};

const currencyReducer = createReducer(
  initialCurrenciestate,
  on(
    CurrencyActions.LoadCurrencies,
    (state): CurrencyState => ({
      ...state,
      loaded: true,
      error: null,
    })
  ),
  on(CurrencyActions.LoadCurrenciesSuccess, (state, { data }) => {
    return {
      ...state,
      currencies: data,
      loaded: true,
      error: null,
    };
  }),
  on(
    CurrencyActions.LoadCurrenciesFailure,
    (state, { error }): CurrencyState => ({
      ...state,
      error,
    })
  )
);

export function reducer(state: CurrencyState | undefined, action: Action) {
  return currencyReducer(state, action);
}
