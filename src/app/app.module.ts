import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app-routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LayoutModule} from './Components/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
