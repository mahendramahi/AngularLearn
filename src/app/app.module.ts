import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainer } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainer,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
