import { Product } from './../../../models/Product';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private _hubConnection!: HubConnection;
  constructor(private productService: ProductService) { }

  emitNotification = new EventEmitter<string>();

  productName: string = "";
  description: string = "";

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder().withUrl('http://localhost:5000/hub').build()
    this._hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addProduct() {
    let product = new Product(this.productName, this.description);

    this.productService.AddProduct(product).subscribe(() => { })

    this._hubConnection.invoke('NotificationNewProduct', product).then((response: string) => {
      this.emitNotification.emit(response);
      console.log(response)
    })
  }

}
