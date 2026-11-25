import { Component } from '@angular/core';
import { NavbarComponents } from '../../Components/navbar-components/navbar-components';
import { products } from '../../data/product';

@Component({
  selector: 'app-shop-all',
  imports: [NavbarComponents],
  templateUrl: './shop-all.html',
  styleUrl: './shop-all.css',
})
export class ShopAll {

  product = products;

  filterAll = this.product.filter(product => product.product_id);
}
