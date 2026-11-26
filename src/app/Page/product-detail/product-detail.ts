import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, products } from '../../data/product';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  

  product: Product | undefined;


  products = products;

  quantity: number = 1;

  

  constructor(
    private route: ActivatedRoute,
    private cartService: Cart
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = products.find(
      item => item.product_id === id
    );

  }

 get relatedProduct(): Product[] {

  if (!this.product) {
    return [];
  }

  return this.products
    .filter(
      item => item.product_id !== this.product!.product_id
    )
    .slice(0, 4);

}

increaseQty() {
  this.quantity++;
}

decreaseQty(){

  if(this.quantity <= 0) {

    this.quantity = 0;
    return;

    
  }
  this.quantity--;

  
}

addToCart() {

  if(!this.product) return;

  this.cartService.addtoCart({

    product_id: this.product.product_id,
    name: this.product.product_name,
    price: this.product.price,
    quantity: this.quantity,
    image: this.product.image
  });
}
}
