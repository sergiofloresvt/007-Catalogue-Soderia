import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-producr-detail',
  templateUrl: './producr-detail.component.html',
  styleUrls: ['./producr-detail.component.css']
})
export class ProducrDetailComponent implements OnInit{
  // productId: number = 0;
  // product?: Product 
  selectedProduct: Product | undefined;

  products: Product[] =[];
constructor(
  private productService: ProductService,
  private route: ActivatedRoute
  
){}

  ngOnInit(): void {
  

  }




}
