import { NgModule } from '@angular/core';

import { SharedFeatureModule} from '../shared-feature/shared-feature.module';
import { ClientesRoutingModule } from './clientes-routing.module'

@NgModule({
  imports: [
	ClientesRoutingModule,
	SharedFeatureModule
  ],
  declarations: [
  	ClientesRoutingModule.components
  ]
})
export class ClientesModule { }
