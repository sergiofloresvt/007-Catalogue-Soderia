import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Product []=[];

  constructor(
    private productService: ProductService,
    private router :Router
  )
  {}

  ngOnInit(): void {

    this.productService.getProductsByPath('/assets/product/vinos.json').subscribe((
      data => {
        this.products = this.products.concat(data.slice(1, 6))
      }
    ))
    this.productService.getProductsByPath('/assets/product/espirituosas.json').subscribe((
      data => {
        this.products = this.products.concat(data.slice(1, 5))
      }
    ))
    this.productService.getProductsByPath('/assets/product/aperitivos.json').subscribe((
      data => {
        this.products = this.products.concat(data.slice(1, 4))
      }
    ))
    this.productService.getProductsByPath('/assets/product/gaseosas.json').subscribe((
      data => {
        this.products = this.products.concat(data.slice(1, 6))
      }
    ))
   }

       //Metodo para traer una producto por id 
       getProduct(){
        this.productService.getProducts().subscribe((products) => {
          this.products = products;
        });
      }
      selectProduct(product: Product) {
        // Cuando se selecciona una tarjeta, actualiza el producto seleccionado
        // this.selectedProduct = product;
        
        this.router.navigate(['/detail', product.id]);
      }
   }
   

  




