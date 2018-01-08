import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LayoutDefaultComponent } from '../shared-feature/layout-default/layout-default.component';
// Components
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutDefaultComponent,
    children: [
      {path: '', component: ClientesListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClientesRoutingModule {
	static components = [
		ClientesListComponent
	];
}
