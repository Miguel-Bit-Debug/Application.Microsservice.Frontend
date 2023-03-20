import { Product } from './../../models/Product';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlBase: string = "http://localhost:5000/api/Product";

  constructor(private http: HttpClient) {  }

  public ListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlBase}/list-products`)
  }

  public AddProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.urlBase}/add-product`, product)
  }
}
