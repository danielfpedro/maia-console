import { NgModule } from '@angular/core';

import { SharedModule} from '../shared/shared.module';

// Components
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

@NgModule({
  imports: [
  	SharedModule
  ],
  declarations: [LayoutDefaultComponent]
})
export class SharedFeatureModule { }