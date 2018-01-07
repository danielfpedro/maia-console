import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  
  { path: 'clientes', loadChildren: 'app/clientes/clientes.module#ClientesModule' },
  // { path: '', pathMatch:'full', redirectTo: '/' },
  // { path: '**', pathMatch:'full', redirectTo: '/' } //catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
