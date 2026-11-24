import { Component } from '@angular/core';
import { NavbarComponents } from '../../Components/navbar-components/navbar-components';
import { BannerComponents } from '../../Components/banner-components/banner-components';
import { BestSellerProduct } from '../../Components/best-seller-product/best-seller-product';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponents, BannerComponents, BestSellerProduct],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
