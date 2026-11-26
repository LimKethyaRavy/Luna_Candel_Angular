import { Component } from '@angular/core';
import {Product, products } from '../../data/product';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TokhrPipe } from '../../pipes/tokhr-pipe';
import { Cart } from '../../services/cart';


@Component({
  selector: 'app-best-seller-product',
  imports: [SlicePipe, RouterLink, CurrencyPipe, TokhrPipe],
  templateUrl: './best-seller-product.html',
  styleUrl: './best-seller-product.css',
})
export class BestSellerProduct {

  product  = products;

  bestSellers = this.product.filter(product => product.tags.includes('Best Seller'))

    
    constructor(
     
      private cartService: Cart
    ) {}

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
