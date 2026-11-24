import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-components',
  imports: [],
  templateUrl: './banner-components.html',
  styleUrl: './banner-components.css',
})
export class BannerComponents {
  slides = [
    {
      eyebrow: 'THE ART OF SLOW LIVING',

      title: 'Your space. Your scent.',

      description: 'Discover thoughtfully crafted candles for every moment.',

      buttonText: 'Shop All Candles',

      link: '/shop',

      image: '/assets/img/hero-banner-1.png',

      imageAlt: 'A scented candle burning beside white flowers',
    },
    {
      eyebrow: 'A MOMENT JUST FOR YOU',

      title: 'Find your kind of calm.',

      description: 'Soft fragrances to make your everyday moments feel special.',

      buttonText: 'Explore Our Scents',

      link: '/collections',

      image: '/assets/img/her-banner-2.png',

      imageAlt: 'A luxury candle in a peaceful interior',
    },
    {
      eyebrow: 'GIVE THE GIFT OF SCENT',

      title: 'Thoughtful gifts. Beautiful moments.',

      description: 'Discover beautifully crafted candles for the people you love.',

      buttonText: 'Shop Gift Sets',

      link: '/gift-sets',

      image: '/assets/img/her-banner-3.png',

      imageAlt: 'A beautifully packaged scented candle gift',
    },

     {
      eyebrow: 'GIVE THE GIFT OF SCENT',

      title: 'Thoughtful gifts. Beautiful moments.',

      description: 'Discover beautifully crafted candles for the people you love.',

      buttonText: 'Shop Gift Sets',

      link: '/gift-sets',

      image: '/assets/img/hero-banner-4.png',

      imageAlt: 'A beautifully packaged scented candle gift',
    },
  ];
}
