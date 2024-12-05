import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Establecer la ruta inicial
    this.currentRoute = this.router.url;

    // Suscribirse a los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  // Cambiar la ruta al hacer clic y aplicar la clase de color
  setCurrentRoute(route: string): void {
    this.currentRoute = route;
    this.router.navigate([route]);
  }
}
