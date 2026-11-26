import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Cart } from '../../services/cart';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar-components',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css',
})
export class NavbarComponents {
  isMenuOpen = false;

 private cart = inject(Cart);

  cartCount$ = this.cart.cartCount$;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
