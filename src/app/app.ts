import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomePage } from './Page/home-page/home-page';
import Aos from 'aos';
import { NavbarComponents } from './Components/navbar-components/navbar-components';
import { Footer } from './Components/footer/footer';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, NavbarComponents, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Candel_Web_Angular');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => Aos.refreshHard());
  }
}
