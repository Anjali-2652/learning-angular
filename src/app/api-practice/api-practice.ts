import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-practice',
  imports: [JsonPipe],
  templateUrl: './api-practice.html',
  styleUrl: './api-practice.css',
})
export class ApiPractice {
  apiUrl = "https://fakestoreapi.com/products";
  responseData: any;
  constructor(private http: HttpClient){

  }

  getHeaders(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ${this.token}'
    });
  }

  //get 
  getUserDetails(){
    this.http.get(this.apiUrl).subscribe(res=> this.responseData = res);
  }

  // post..  
  createProduct(){
this.http.post(this.apiUrl,{
    title: "test product",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",

  }, {headers: this.getHeaders() })
.subscribe(res=> this.responseData = res);
}

updateProduct(id:number){
this.http.put(`${this.apiUrl}/${id}`,{
   title: "test product",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
}, {headers: this.getHeaders()}).subscribe(res => this.responseData = res)
  }

  // deleteProduct(id: number){

  // }

}
