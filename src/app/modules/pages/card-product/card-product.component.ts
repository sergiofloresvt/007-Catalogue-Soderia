import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.RoutesNav();
  }

  /*Metodo para enrutar lo selecionado en la nav
  tomando el archivo json y compiladolo en la tarjeta card
  para ahorra el trabajo de crear multiples componete para la vista de 
  todos los productos ya que todos llevan un estructura igual  */
  
  RoutesNav(){
    this.route.paramMap.subscribe(params => {
      const categories = params.get('categories');
      if (categories) {
        this.productService.getProductsByCategory(categories).subscribe(data => {
          this.products = data;
        });
      }
    });
  }
}
