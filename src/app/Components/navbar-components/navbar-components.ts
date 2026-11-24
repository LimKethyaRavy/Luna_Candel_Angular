import { Component } from '@angular/core';

interface NavbarItem {


 name: string,
 path: string
}



@Component({
  selector: 'app-navbar-components',
  imports: [],
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css',
})
export class NavbarComponents {

  isMenuOpen = false;

   navbarCategory : NavbarItem[] = [
    {
  
      name: 'Home',
      path: '/'

    },
    {
  
      name: 'Shop',
      path: '/',

    },
    {

      name: 'About',
      path: '/',

    },
    

  ] 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {

    this.isMenuOpen = false;
  }


}
