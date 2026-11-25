import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavbarItem {


 name: string,
 path: string
}



@Component({
  selector: 'app-navbar-components',
  imports: [RouterLink],
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css',
})
export class NavbarComponents {

  isMenuOpen = false;

  isActivePath : string = '/home';

  OnSelectLink(path: string) : void {

    this.isActivePath = path;
    this.isMenuOpen = false;
  }

  isActiveLink(path: string) : boolean {

    const isMatch : boolean = this.isActivePath === path;
    return isMatch;
  }

  

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
