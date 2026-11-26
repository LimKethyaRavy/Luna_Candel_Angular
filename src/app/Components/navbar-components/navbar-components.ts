import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../services/cart';
import { AsyncPipe } from '@angular/common';

interface NavbarItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navbar-components',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css',
})
export class NavbarComponents {
  isMenuOpen = false;

  isActivePath: string = '/home';

  OnSelectLink(path: string): void {
    this.isActivePath = path;
    this.isMenuOpen = false;
  }

  isActiveLink(path: string): boolean {
    const isMatch: boolean = this.isActivePath === path;
    return isMatch;
  }

 private cart = inject(Cart);

  cartCount$ = this.cart.cartCount$;



  navbarCategory: NavbarItem[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Shop',
      path: '/',
    },
    {
      name: 'About',
      path: '/',
    },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
