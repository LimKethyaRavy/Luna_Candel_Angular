import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart_Data } from '../../model/cart-item';
import { TokhrPipe } from '../../pipes/tokhr-pipe';
import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-page',
  imports: [AsyncPipe, RouterLink, TokhrPipe, CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {

 private cart = inject(Cart);

 
 cartItem$ = this.cart.cartItem$;
 cartTotal$ = this.cart.cartTotal$;
 orderProcessing = false;


 increaseQty(item: Cart_Data) {
  this.cart.updateQuantity(item.product_id, item.quantity + 1);
}

decreaseQty(item: Cart_Data) {
  this.cart.updateQuantity(item.product_id, item.quantity - 1);
}

removeItem(item: Cart_Data) {

 Swal.fire({
    title: 'Are you sure? you want to remove product from cart',
    text: 'Your order will be remove',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, proceed',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.cart.removeItem(item.product_id);
    }
  });

  



}

checkoutSuccess(): void {
  this.cart.clearCart();
  this.orderProcessing = true;

  Swal.fire({
    title: 'Order received',
    text: 'Your order is being processed.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
}


public totalPrice(item: Cart_Data): number {
  return item.price * item.quantity;
} 

}
