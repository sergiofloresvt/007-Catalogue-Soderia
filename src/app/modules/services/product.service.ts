import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient 
  ) {}

    getProductsByCategory(category: string): Observable<Product[]> {
    // Construye la URL del archivo JSON según la categoría
    const productsUrl = `assets/product/${category}.json`;

    return this.http.get<Product[]>(productsUrl);
  }
}
  // Ruta al archivo JSON en la carpeta assets

  

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl);
  // }


  // getProductsByCategory(categories: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl).pipe(
  //     map(products => products.filter(product => product.category === categories))
  //   );
  // }