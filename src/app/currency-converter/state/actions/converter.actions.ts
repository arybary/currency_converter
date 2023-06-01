import { createAction, props } from '@ngrx/store';

export type CurrencyConvert = 'currencyTo' | 'currencyFrom';

export const setAmountTo = createAction(
  '[Converter] Set convert AmountTo',
  props<{ amount: number }>()
);
export const setAmountFrom = createAction(
  '[Converter] Set convert AmountFrom',
  props<{ amount: number }>()
);
export const convertAmountFrom = createAction('[Converter] convert AmountFrom');
export const convertAmountTo = createAction('[Converter] convert AmountTo');

export const setSelectedCurrency = createAction(
  '[Converter] Set convert Currency',
  props<{ currencyConvert: CurrencyConvert; currency: string }>()
);

export const initConverter = createAction('[Converter] Init Converter');
