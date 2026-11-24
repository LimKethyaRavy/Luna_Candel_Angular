import { Component } from '@angular/core';
import { products } from '../../data/product';



@Component({
  selector: 'app-best-seller-product',
  imports: [],
  templateUrl: './best-seller-product.html',
  styleUrl: './best-seller-product.css',
})
export class BestSellerProduct {

  product  = products;

  bestSellers = this.product.filter(product => product.tags.includes('Best Seller'))


}
