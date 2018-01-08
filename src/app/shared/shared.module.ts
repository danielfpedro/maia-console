import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
  	MaterialModule
  ],
  declarations: []
})
export class SharedModule { }
