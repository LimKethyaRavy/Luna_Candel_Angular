import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './Page/home-page/home-page';
import Aos from 'aos';
import { NavbarComponents } from './Components/navbar-components/navbar-components';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, NavbarComponents, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Candel_Web_Angular');

    ngAfterViewInit(): void {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }
}
