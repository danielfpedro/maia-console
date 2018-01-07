import { NgModule } from '@angular/core';

import { SharedModule} from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module'

@NgModule({
  imports: [
	ClientesRoutingModule,
	SharedModule
  ],
  declarations: [
  	ClientesRoutingModule.components
  ]
})
export class ClientesModule { }
