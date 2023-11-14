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
  products: Product[] =[];
  //Lista para nombres de variedad de vino
  varieties: string[] = []; 
  winesVarieties: Product []=[];

  headerImage: string = ''; // Propiedad para almacenar la URL de la imagen del encabezado
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.RoutesNav();
    // this.getVarieties();

    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    // });
 
  }

  /*Metodo para enrutar lo selecionado en la nav
  tomando el archivo json y compiladolo en la tarjeta card
  para ahorra el trabajo de crear multiples componete para la vista de 
  todos los productos ya que todos llevan un estructura igual  */
  
  RoutesNav(){
    this.route.paramMap.subscribe(params => {
      const categories = params.get('categories');
      if (categories) {
        this.productService.getProductsByCategory(categories).subscribe(dato => {
          this.products = dato;//por aca anda el error
          this.updateHeaderImage(categories)
        }, error =>{
          console.error('Error al obtener la ruta',error)
        });
      }
    });

  }

    // Nueva función para actualizar la imagen del encabezado
    updateHeaderImage(category: string) {
      // Lógica para determinar la imagen del encabezado según la categoría
      if (category === 'vinos') {
        this.headerImage = '../assets/img/publi/vinos-header.jpg';
      } else if (category === 'gaseosas') {
        this.headerImage = '../assets/img/gaseosas/uvas.jpeg';
      } else {
        // Si la categoría no coincide, puedes establecer una imagen predeterminada o dejarla en blanco
        this.headerImage = '';
      }
    }
  // //Metodo para traer todas las variedades disponibles
  // getVarieties(){
  //  this.productService.getWinesByVarieties().subscribe(varieties =>{
  //   this.varieties = varieties;
  //  })
  // }

  // onSelectVariety(variety: string) {
  //   this.productService.getProductsByVariety(variety).subscribe((filteredProducts) => {
  //     this.winesVarieties = filteredProducts;
  //   });
  // }

}



