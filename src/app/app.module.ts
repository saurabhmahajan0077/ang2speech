import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { TextResponseComponent } from './text-response/text-response.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchButtonComponent,
    TextResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
