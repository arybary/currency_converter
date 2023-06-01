import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCurrency from './state/reducers/currency.reducer';
import { CurrencyEffects } from './state/effects/currency.effects';
import { CurrencyFacade } from './state/currency.facade';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContactsComponent } from './container/contacts/contacts.component';
import { NotFoundPageComponent } from './container/not-found-page/not-found-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NotFoundPageComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    StoreModule.forFeature(
      fromCurrency.currencyFeatureKey,
      fromCurrency.reducer
    ),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
  providers: [CurrencyFacade],
})
export class CoreModule {}
