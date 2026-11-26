import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product, products } from '../../data/product';
import { TokhrPipe } from '../../pipes/tokhr-pipe';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-new-product-components',
  imports: [SlicePipe, RouterLink, CurrencyPipe, TokhrPipe],
  templateUrl: './new-product-components.html',
  styleUrl: './new-product-components.css',
})
export class NewProductComponents {
  product = products;

  newProduct = this.product.filter((product) => product.tags.includes('New Arrival'));

  constructor(private cartService: Cart) {}

  quantity: number = 1;

  addToCart(product: Product, event: MouseEvent) {
    event.stopPropagation();

    this.cartService.addtoCart({
      product_id: product.product_id,
      name: product.product_name,
      price: product.price,
      quantity: this.quantity,
      image: product.image,
    });
  }
}
