import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/user';
import { RestService } from './rest_service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http: RestService) { }

  getProducts() {
    let url = `products`
    return this.http.get(true, url);
  }

  getProductById(id: Number) {
    let url = `products${id}`
    return this.http.get(true, url);
  }

  addProduct(product: Product) {
    let url = `products`
    return this.http.post(true, url, product);
  }

  updateProduct(product: Product, id: Number) {
    let url = `products${id}`
    return this.http.put(true, url, product);
  }

  deleteProduct(id: Number) {
    let url = `products${id}`
    return this.http.delete(true, url);
  }

  login(user: User): Observable<User> {
    let url = `login`
    return this.http.post(true, url, user);
  }



}
