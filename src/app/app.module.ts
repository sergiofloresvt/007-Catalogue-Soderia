import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { NavComponent } from './modules/shared/nav/nav.component';

import { CardProductComponent } from './modules/pages/card-product/card-product.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { ProducrDetailComponent } from './modules/pages/producr-detail/producr-detail.component';
import { CarruselComponent } from './modules/pages/carrusel/carrusel.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    CardProductComponent,
    HomeComponent,
    ProducrDetailComponent,
    CarruselComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
