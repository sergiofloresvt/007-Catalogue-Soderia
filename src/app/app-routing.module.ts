import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductComponent } from './modules/pages/card-product/card-product.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'productos/:categories', component: CardProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
