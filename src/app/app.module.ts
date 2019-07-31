import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Server2Component } from './server2/server2.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

import { FormbasecomponentComponent } from './formbasecomponent/formbasecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Server2Component,
    MoreinfoComponent,
    
    FormbasecomponentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
