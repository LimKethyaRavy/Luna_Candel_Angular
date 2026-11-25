import { Routes } from '@angular/router';
import { HomePage } from './Page/home-page/home-page';
import { ShopAll } from './Page/shop-all/shop-all';

export const routes: Routes = [

    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },

    {
        path: '', component: HomePage
    },

    {
        path: 'shop', component: ShopAll
    }
];
