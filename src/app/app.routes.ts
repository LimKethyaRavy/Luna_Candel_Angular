import { Routes } from '@angular/router';
import { HomePage } from './Page/home-page/home-page';
import { ShopAll } from './Page/shop-all/shop-all';
import { ProductDetail } from './Page/product-detail/product-detail';
import { CartPage } from './Page/cart-page/cart-page';
import { AboutUs } from './Page/about-us/about-us';
import { ContactPage } from './Page/contact-page/contact-page';

export const routes: Routes = [

    {
        path: '', component: HomePage
    },

    {
        path: 'shop', component: ShopAll
    },
    {
        path: 'product/:id',
        component: ProductDetail
    },

    {
        path: 'about-us',
        component: AboutUs
    },
    {
        path: 'contact',
        component: ContactPage
    },
    {
        path: 'cart',
        component: CartPage
    }
];
