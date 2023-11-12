import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductComponent } from './modules/pages/card-product/card-product.component';
import { HomeComponent } from './modules/pages/home/home.component';

import { WineVarietyComponent } from './modules/pages/wine-variety/wine-variety.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'productos/:categories', component: CardProductComponent},
  // { path: 'productos/:categories,variety', component: CardProductComponent},

  { path: 'productos/vinos/:variety', component: WineVarietyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
