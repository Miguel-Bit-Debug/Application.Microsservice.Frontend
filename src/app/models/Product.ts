export class Product {
  constructor(productName: string, description: string) {
    this.productName = productName;
    this.description = description;
  }
  id: string = "";
  productName: string;
  description: string;

}
