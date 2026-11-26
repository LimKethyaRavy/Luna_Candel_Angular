import { Injectable } from '@angular/core';
import { Cart_Data } from '../model/cart-item';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Cart {

  private cartItem: Cart_Data[] = [];

  private cartSubject = new BehaviorSubject<Cart_Data[]>([]);

  cartItem$ = this.cartSubject.asObservable();


  addtoCart(item: Cart_Data) {

    const existingItem = this.cartItem.find(
      product => product.product_id === item.product_id
    );

    if(existingItem) {

      existingItem.quantity += item.quantity;

    } else {

      this.cartItem.push(item);
    }

    this.cartSubject.next([...this.cartItem]);
  }

  removeItem (product_id: number) {

    this.cartItem = this.cartItem.filter(

      item => item.product_id !== product_id
    );

    this.cartSubject.next([...this.cartItem]);

    
  }

  clearCart(): void {
    this.cartItem = [];
    this.cartSubject.next([]);
  }

  updateQuantity(product_id: number, quantity: number) {

    if(quantity <= 0) {
      this.removeItem(product_id);

      return;
    }

    this.cartItem = this.cartItem.map(item=> item.product_id === product_id ? {...item,quantity} : item);

    this.cartSubject.next([...this.cartItem]);
  }

  cartCount$ = this.cartItem$.pipe(
    map(item=> item.reduce((total, item) => total + item.quantity, 0))
  )

  cartTotal$ = this.cartItem$.pipe(
    map(items => items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ))
  )
}

