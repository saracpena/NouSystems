import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './nou-systems/button/button.component';

import { ContainerComponent } from './nou-systems/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ButtonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
