import { Product } from './../../../models/Product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.ListProducts().subscribe((products) => {
      this.products = products
    })
  }

  public ListProduct() {

  }

}
