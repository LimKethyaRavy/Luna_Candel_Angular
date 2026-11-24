import { Component } from '@angular/core';

interface ScentMood {
  title: string,
  description: string,
  imageUrl: string,
  linkText: string
}
@Component({
  selector: 'app-scent-mood-components',
  imports: [],
  templateUrl: './scent-mood-components.html',
  styleUrl: './scent-mood-components.css',
})
export class ScentMoodComponents {

  moods: ScentMood[] = [
    {
      title: 'Calm & Relax',
      description: 'Lavender, chamomile and soft florals.',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/aromatherapy-candles-1657059817.png?crop=1.00xw:0.890xh;0,0.0566xh&resize=640:*',
      linkText: 'Discover Scents'
    },
    {
      title: 'Warm & Cozy',
      description: 'Vanilla, amber and woody scents.',
      imageUrl: 'https://m.media-amazon.com/images/I/71rCe7qu2pL._AC_UF350,350_QL80_.jpg',
      linkText: 'Discover Scents'
    },
    {
      title: 'Fresh & Uplifting',
      description: 'Citrus, eucalyptus and ocean-inspired scents.',
      imageUrl: 'https://memoryboxcandleco.com/cdn/shop/files/2_Cedar_Eucalyptus_Soy_Candle_-_Memory_Box_Candle_Co_-_Nostalgia_Candle.png?v=1731958680&width=1080',
      linkText: 'Discover Scents'
    }
  ];
}
