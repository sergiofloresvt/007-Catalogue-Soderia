import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private varieties: Product []=[]
  winesVarieties: Product[]=[]

  constructor(
    private http: HttpClient 
  ) {}
    
    private apiUrl = 'assets/product/vinos.json'

  getProductsByCategory(category: string): Observable<Product[]> {
    // Construye la URL del archivo JSON según la categoría
    const productsUrl = `assets/product/${category}.json`;
    return this.http.get<Product[]>(productsUrl);
  }

//Crea un array de productos vinos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(datas =>{
        this.winesVarieties = datas;
        return datas;
      })
    )
  }
//Buscamos los vinos por variedad para mostrar en un lista.
  getWinesByVarieties(): Observable<string[]> {
    return this.getProducts().pipe(
      map(productos => {
        const varieties = new Set<string>();
        productos.forEach(producto => {
          if (producto.variety) {
            varieties.add(producto.variety);
          }
        });
        return Array.from(varieties);
      })
    );
  }

  //Agrupamos los vinos por variedad
  getProductsByVariety(variety: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((productos) => productos.filter((product) => product.variety === variety))
    );
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
    // getProductsByVariety(variety: string | undefined): Observable<Product[]> {
  //   // Manejar el caso cuando variety es undefined
  //   if(!variety){
  //     return this.getProducts()
  //   }
  //   return this.http.get<Product[]>(this.apiUrl).pipe(
  //     map((products) => products.filter((product) => product.variety === variety))
  //   );
  // }
