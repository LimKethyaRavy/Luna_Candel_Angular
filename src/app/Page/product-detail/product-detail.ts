import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, products } from '../../data/product';
@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  

  product: Product | undefined;


  products = products;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = products.find(
      item => item.product_id === id
    );

  }

 get relatedProduct(): Product[] {

  if (!this.product) {
    return [];
  }

  return this.products
    .filter(
      item => item.product_id !== this.product!.product_id
    )
    .slice(0, 4);

}

}
