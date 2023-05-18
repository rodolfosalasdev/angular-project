import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDefaultModule } from './shared/card-default/card-default.module';
import { NavbarComponent } from './components/templete/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardDefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
