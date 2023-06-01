import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';
import { CurrencyConverterComponent } from './currency-converter/components/currency-converter.component';

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
        path: 'about',
        loadChildren: () =>
          import('./currency-converter/currency-converter.module').then(
            (m) => m.CurrencyConverterModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
