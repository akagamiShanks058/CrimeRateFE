import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)
  },
  {
    path: 'crime', loadChildren: () => import('./crime/crime.module').then(m => m.CrimeModule)
  },
  {
    path: '', loadChildren: () => import('./crime/crime.module').then(m => m.CrimeModule)
  },
  // {path: '404', component: Page404Component},
  // {path: '**', redirectTo: '/404'}
 // { path: '', redirectTo: 'b/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
