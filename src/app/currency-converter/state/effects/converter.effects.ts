import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { CurrencyConverterService } from '../../services/currency-converter.service';
import * as ConverterActions from '../actions/converter.actions';
import { ConverterFacade } from '../converter.facade';

@Injectable()
export class ConverterEffects {
  constructor(
    private actions$: Actions,
    private converterService: CurrencyConverterService,
    private converterFacade: ConverterFacade
  ) {}

  getAmountFrom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ConverterActions.initConverter,
        ConverterActions.setSelectedCurrency,
        ConverterActions.convertAmountFrom
      ),
      withLatestFrom(
        this.converterFacade.currencyTo$,
        this.converterFacade.currencyFrom$,
        this.converterFacade.amountTo$
      ),
      switchMap(([, toCurrency, fromCurrency, toAmount]) =>
        this.converterService.convert(fromCurrency, toCurrency, toAmount)
      ),
      map((amount) => ConverterActions.setAmountFrom({ amount }))
    )
  );
  getAmountTo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConverterActions.convertAmountTo),
      withLatestFrom(
        this.converterFacade.currencyTo$,
        this.converterFacade.currencyFrom$,
        this.converterFacade.amountFrom$
      ),
      switchMap(([, toCurrency, fromCurrency, fromAmount]) =>
        this.converterService.convert(toCurrency, fromCurrency, fromAmount)
      ),
      map((amount) => ConverterActions.setAmountTo({ amount }))
    )
  );
}
