import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

// Operador de tipo guardia personalizado
function isNavigationEnd(event: Event): event is NavigationEnd {
  return event instanceof NavigationEnd;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routerUrl: string;

  constructor(private router: Router) {
    this.routerUrl = this.router.url;

    // Suscribirse a los eventos de cambio de ruta
    this.router.events.pipe(
      filter(isNavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.routerUrl = event.urlAfterRedirects;
    });
  }
}
