import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './navbar/navbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
   	RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
  	MaterialModule,
  	RouterModule,
    MainMenuComponent,
    NavbarComponent,
    FlexLayoutModule
  ],
  declarations: [
  	NavbarComponent,
  	MainMenuComponent
  ]
})
export class SharedModule { }
