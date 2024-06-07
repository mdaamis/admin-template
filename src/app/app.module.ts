import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchbarComponent,
    SalesComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
