import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ContactMeComponent } from './contactme/contactme.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ContactMeComponent,
    AboutMeComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
