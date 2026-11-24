import { Component } from '@angular/core';
import { products } from '../../data/product';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-new-product-components',
  imports: [SlicePipe],
  templateUrl: './new-product-components.html',
  styleUrl: './new-product-components.css',
})
export class NewProductComponents {

  product = products;

  newProduct = this.product.filter(product => product.tags.includes('New Arrival'));

  

}
