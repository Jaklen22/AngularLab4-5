import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detials',
  standalone: true,
  imports: [],
templateUrl: './detials.component.html',
  styleUrl: './detials.component.css'
})
export class DetialsComponent implements OnInit {

  currentId :number =0;
  product :Iproduct|null =null;
  idsArr:number[];
  currentIdIndex:number=0;
  constructor(private _activatedRoute:ActivatedRoute ,
    private _ProductsService:ProductsService,
    private _Location:Location ,
    private _router :Router){
      this.idsArr= this._ProductsService.mapProductsToIds()
    }

  ngOnInit():void{
    
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
     this.currentId=Number( paramMap.get('id'))
     this.product = this._ProductsService.getProductById(this.currentId)

    })
    // this.currentId=Number(this._activatedRoute.snapshot.paramMap.get('id')) 
    //  this.product = this._ProductsService.getProductById(this.currentId)
  }
  goBack(){
    this._Location.back();
  }

  next() {
    this.currentIdIndex =this.idsArr.findIndex((id)=>id==this.currentId)
     if(this.currentIdIndex!=this.idsArr.length-1){
      this._router.navigateByUrl(`/details/${this.idsArr[this.currentIdIndex+1]}`)

    }

  }
  prev() {
    this.currentIdIndex =this.idsArr.findIndex((id)=>id==this.currentId)
    if(this.currentIdIndex!=0){
      this._router.navigateByUrl(`/details/${this.idsArr[this.currentIdIndex-1]}`)

    }
   
    }
  }


