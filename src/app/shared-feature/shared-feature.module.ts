import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule} from '../core';
import { SharedModule } from '../shared';

// Components
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
  imports: [
  	RouterModule,
  	CoreModule,
  	SharedModule
  ],
  exports: [
  	SharedModule
  ],
  declarations: [LayoutDefaultComponent]
})
export class SharedFeatureModule { }