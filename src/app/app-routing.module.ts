import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './core/container/contacts/contacts.component';
import { NotFoundPageComponent } from './core/container/not-found-page/not-found-page.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'converter', pathMatch: 'full' },
      {
        path: 'converter',
        loadChildren: () =>
          import('./currency-converter/currency-converter.module').then(
            (m) => m.CurrencyConverterModule
          ),
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
