import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {

 private cart = inject(Cart);

 cartItem$ = this.cart.cartItem$;


}
