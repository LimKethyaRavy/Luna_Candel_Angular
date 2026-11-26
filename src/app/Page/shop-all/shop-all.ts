import { Component } from '@angular/core';
import { NavbarComponents } from '../../Components/navbar-components/navbar-components';
import { Product, products } from '../../data/product';
import { RouterLink } from '@angular/router';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-shop-all',
  imports: [NavbarComponents, RouterLink],
  templateUrl: './shop-all.html',
  styleUrl: './shop-all.css',
})
export class ShopAll {

  product = products;

  
  constructor(
   
    private cartService: Cart
  ) {}

  filterAll = this.product.filter(product => product.product_id);

  
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


  quantity: number = 1;

  addToCart(product: Product, event: MouseEvent) {
    event.stopPropagation();

    this.cartService.addtoCart({

      product_id: product.product_id,
      name: product.product_name,
      price: product.price,
      quantity: this.quantity,
      image: product.image
    });
  }
  
}
