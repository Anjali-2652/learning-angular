import { Component } from '@angular/core';
import {User} from "../services/user"
import { Product } from '../services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
name:String = ''
products: any[] = [];
constructor(private userService: User, private productService: Product)
{
  this.name = this.userService.getUserName()
  this.productService.getProducts()
  .subscribe(data=>{
    this.products = data;
  });
}
changeName(){
  this.userService.setUserName("Anju");
  this.name = this.userService.getUserName();
}
}
