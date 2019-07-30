import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Server2Component } from './server2/server2.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    Server2Component,
    MoreinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
