import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  selectedProduct: Product | undefined;
//25/11

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.RoutesNav();
    // this.getVarieties();
    this.getProduct();
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    // });
 
  }

  /*Metodo para enrutar lo selecionado en la nav
  tomando el archivo json y compilandolo en la tarjeta card
  para ahorra el trabajo de crear multiples componete para la vista de 
  todos los productos ya que todos llevan un estructura igual  */
  
  RoutesNav(){
    this.route.paramMap.subscribe(params => {
      const categories = params.get('categories');
      if (categories) {
        this.productService.getProductsByCategory(categories).subscribe(dato => {
          this.products = dato;
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
        this.headerImage = '../assets/img/publi/vinos-wines.png';

      } else if (category === 'cervezas'){
        this.headerImage = '../assets/img/publi/cervezas-foam.png';

      } else if (category === 'gaseosas') {
        this.headerImage = '../assets/img/publi/gaseosas-frut.png';

      } else if (category === 'espirituosas') {
        this.headerImage = '../assets/img/publi/whisky-liquid.png';

      } else if (category === 'aperitivos') {
        this.headerImage = '../assets/img/publi/aperitivos-liquid2.png';
      }
      else if (category === 'cervezas-latas') {
        this.headerImage = '../assets/img/publi/cervezas-foam.png';
      } else {
        // Si la categoría no coincide, puedes establecer una imagen predeterminada o dejarla en blanco
        this.headerImage = '';
      }
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

    // selectProduct(product: any): void {
    //   // Navegar a la página de detalle con el id del producto
    //   this.router.navigate(['/detail', product.id]);
    // }


  }






