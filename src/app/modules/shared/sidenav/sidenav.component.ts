import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 //Lista para nombres de variedad de vino
//  varieties: string[] = []; 
//  winesVarieties: Product []=[]; 
// constructor(
//   private productService: ProductService
// ){

// }



  ngOnInit(): void {
  //  this.getVarieties();
  }
  // onSelectVariety(variety: string) {
  //   this.productService.getProductsByVariety(variety).subscribe((filteredProducts) => {
  //     this.winesVarieties = filteredProducts;
  //   });
  // }

  // //Metodo para traer todas las variedades disponibles
  // getVarieties(){
  //   this.productService.getWinesByVarieties().subscribe(varieties =>{
  //    this.varieties = varieties;
  //   })
  //  }
}
