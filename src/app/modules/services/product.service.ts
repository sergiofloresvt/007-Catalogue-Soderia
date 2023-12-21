import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, from, map, mergeMap, of, reduce } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl2 = 'assets/product/';

  private apiUrl = 'assets/product/vinos.json'
  
  winesVarieties: Product[]=[]

  constructor(
    private http: HttpClient 
  ) {}
    


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

  //Trae todos los produtos por medio del path indicado
  getProductsByPath(jsonPath : string): Observable<Product[]>{
    return this.http.get<Product[]>(jsonPath)
  }
  //
  

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


//Trae un producto por id
getProductById(id: number): Observable<Product | undefined> {
  const url = 'assets/product/vinos.json';

  return this.http.get<Product[]>(url).pipe(
    map(products => products.find(product => product.id === id))
  );
}


}

