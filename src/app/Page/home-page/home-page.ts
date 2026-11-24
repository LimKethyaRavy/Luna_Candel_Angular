import { Component } from '@angular/core';
import { NavbarComponents } from '../../Components/navbar-components/navbar-components';
import { BannerComponents } from '../../Components/banner-components/banner-components';
import { BestSellerProduct } from '../../Components/best-seller-product/best-seller-product';
import { NewProductComponents } from '../../Components/new-product-components/new-product-components';
import { ScentMoodComponents } from '../../Components/scent-mood-components/scent-mood-components';
import { Footer } from '../../Components/footer/footer';


@Component({
  selector: 'app-home-page',
  imports: [NavbarComponents, BannerComponents, BestSellerProduct, NewProductComponents, ScentMoodComponents, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  

}
