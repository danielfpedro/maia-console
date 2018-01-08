import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule} from '../shared/shared.module';

// Components
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
  imports: [
  	RouterModule,
  	SharedModule
  ],
  declarations: [LayoutDefaultComponent]
})
export class SharedFeatureModule { }