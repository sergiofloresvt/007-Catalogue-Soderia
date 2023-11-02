import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}
  // Ruta al archivo JSON en la carpeta assets

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl);
  // }
  getProductsByCategory(category: string): Observable<Product[]> {
    // Construye la URL del archivo JSON según la categoría
    const productsUrl = `assets/product/${category}.json`;

    return this.http.get<Product[]>(productsUrl);
  }

  // getProductsByCategory(categories: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl).pipe(
  //     map(products => products.filter(product => product.category === categories))
  //   );
  // }