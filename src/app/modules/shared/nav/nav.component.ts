import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
   //Lista para nombres de variedad de vino
 varieties: string[] = []; 
 winesVarieties: Product []=[]; 
constructor(
  private productService: ProductService
){

}



  ngOnInit(): void {
   this.getVarieties();
  }
  // onSelectVariety(variety: string) {
  //   this.productService.getProductsByVariety(variety).subscribe((filteredProducts) => {
  //     this.winesVarieties = filteredProducts;
  //   });
  // }
    //Metodo para traer todas las variedades disponibles
    getVarieties(){
      this.productService.getWinesByVarieties().subscribe(varieties =>{
       this.varieties = varieties;
      })
     }

}
