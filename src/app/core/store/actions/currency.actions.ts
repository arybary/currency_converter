import { createAction, props } from '@ngrx/store';
import { Currency } from '../../model/currency.model';


export enum CurrencyActionsNames {
  LoadCurrencies = '[Currency] Load Currencies',
  LoadCurrenciesSuccess = '[Currency] Load Currencies Success',
  LoadCurrenciesFailure = '[Currency] Load Currencies Failure',
}

export const LoadCurrencies = createAction(CurrencyActionsNames.LoadCurrencies);

export const LoadCurrenciesSuccess = createAction(
  CurrencyActionsNames.LoadCurrenciesSuccess,
  props<{ data: Currency[] }>()
);

export const LoadCurrenciesFailure = createAction(
  CurrencyActionsNames.LoadCurrenciesFailure,
  props<{ error: string | null }>()
);
