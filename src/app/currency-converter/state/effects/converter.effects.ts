import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs';
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
        ConverterActions.convertFromAmount
      ),
      withLatestFrom(
        this.converterFacade.currencyTo$,
        this.converterFacade.currencyFrom$,
        this.converterFacade.amountTo$
      ),
      switchMap(([, toCurrency, fromCurrency, toAmount]) =>
        this.converterService.convert(fromCurrency, toCurrency, toAmount)
      ),
      map((amount) => {
        console.log(amount);
        return ConverterActions.setAmountFrom({ amount });
      })
    )
  );
  getAmountTo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConverterActions.convertToAmount),
      withLatestFrom(
        this.converterFacade.currencyTo$,
        this.converterFacade.currencyFrom$,
        this.converterFacade.amountFrom$
      ),
      switchMap(([, toCurrency, fromCurrency, fromAmount]) =>
        this.converterService.convert(toCurrency, fromCurrency, fromAmount)
      ),
      map((amount) => {
        console.log(amount);
        return ConverterActions.setAmountTo({ amount });
      })
    )
  );
}
