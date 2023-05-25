import { createAction, props } from '@ngrx/store';

export const setFirstAmount = createAction('[Currency Converter] Set First Amount', props<{ amount: number }>());
export const setFirstCurrency = createAction('[Currency Converter] Set First Currency', props<{ currency: string }>());
export const setSecondAmount = createAction('[Currency Converter] Set Second Amount', props<{ amount: number }>());
export const setSecondCurrency = createAction('[Currency Converter] Set Second Currency', props<{ currency: string }>());
