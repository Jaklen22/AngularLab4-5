import { Injectable } from '@angular/core';
import { Iproduct  } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products :Iproduct[];
  constructor() {
    this.products=[
      {id:1,name:"iphone",img:"https://fakeimg.pl/350x200/?text=productImg",price:50000,quantity:5,categoryID:10},
      {id:2,name:"Samsung ",img:"https://fakeimg.pl/350x200/?text=productImg",price:40000,quantity:1,categoryID:10},
      {id:3,name:"Dell",img:"https://fakeimg.pl/350x200/?text=productImg",price:45000,quantity:3,categoryID:20},
      {id:4,name:"HP",img:"https://fakeimg.pl/350x200/?text=productImg",price:60000,quantity:2,categoryID:20},
      {id:5,name:"Lenovo",img:"https://fakeimg.pl/350x200/?text=productImg",price:30000,quantity:3,categoryID:30},
      {id:6,name:"Huawei",img:"https://fakeimg.pl/350x200/?text=productImg",price:35000,quantity:6,categoryID:30},
    ];

   
   }
  getAllProducts(): Iproduct[]{
    return this.products;
   }
   getProductById(id: number): Iproduct|null{
    let foundedPrd = this.products.find((prd)=> prd.id==id);
    return foundedPrd? foundedPrd : null;
   }
   getProductByCatId(catId: number):Iproduct[]{
    if (catId==0){
      return this.products
    }else{
    return this.products.filter((prd)=>prd.categoryID==catId)
   }
  }
  mapProductsToIds() : number[]{
    return this.products.map((prd)=>prd.id)


  }
}
