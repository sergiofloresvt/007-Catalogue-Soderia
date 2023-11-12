import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wine-variety',
  templateUrl: './wine-variety.component.html',
  styleUrls: ['./wine-variety.component.css']
})
export class WineVarietyComponent {
 //Lista para nombres de variedad de vino
 variety?: string[] = []; 
 winesVarieties: Product []=[]; 
constructor(
  private productService: ProductService,
  private route:ActivatedRoute
){}
ngOnInit(): void {
  this.RoutesVariety();

}


RoutesVariety() {
  this.route.params.subscribe(params => {
    const varietyParam = params['variety'];
    if (varietyParam) {
      this.productService.getProductsByVariety(varietyParam).subscribe(products => {
        this.winesVarieties = products;
        this.variety = varietyParam; // Asigna el valor dentro del bloque subscribe
      });
    }
  });
}




}
