import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
//import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverCardDirective } from '../../directives/hover-card.directive';
import { PipeTransformPipe } from '../../pipes/pipe-transform.pipe';
import { CreditPipePipe } from '../../pipes/credit-pipe.pipe';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,HoverCardDirective,PipeTransformPipe,CreditPipePipe],

templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
  products:Iproduct[];
  filteredProducts: Iproduct[];
@Input() received:number=0;
  egyptianNationalId:string='29909011509345';
  creditCardId:string='0000000000000000';
  //define event
  @Output() onProductBought: EventEmitter<Iproduct> 

  constructor(private productService: ProductsService ,
    private router:Router)
  
  
  {
    this.products = this.productService.getAllProducts()
    
    this.onProductBought=new EventEmitter<Iproduct>();
    this.filteredProducts=this.products;
  }
  ngOnChanges(){
   this.filteredProducts= this.productService.getProductByCatId(this.received)
  }
  buyProduct(product: Iproduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    this.onProductBought.emit(product);
  }  
  // filterProducts(){
  //   if(this.received==0){
  //     this.filteredProducts=this.products;
  //   }else{
  //     this.filteredProducts=this.products.filter((item)=>item.categoryID==this.received);
  //   }
  // }

  navigateToDetails(id:number){
    this.router.navigateByUrl(`/details/${id}`)

  }
}




