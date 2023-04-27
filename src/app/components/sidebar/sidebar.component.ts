import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navActive = false;
  selectedItem = 0;
  menuItems: { icon: string; title: string; href: string }[] = [];

  constructor(private router: Router) {
    // Suscríbete a los eventos de cambio de ruta.
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateMenuItems(event.url);
      }
    });
  }

  ngOnInit() {
    this.updateMenuItems(this.router.url);
  }


  updateMenuItems(url: string) {
    if (url.startsWith('/clientes')) {
      this.menuItems = [
        { icon: 'fa fa-home', title: 'Home', href: 'clientes' },
        { icon: 'fa-solid fa-truck-field', title: 'Clientes', href: 'clientes/#' },
        { icon: 'fa fa-comment', title: 'Mensajes', href: 'clientes/#' },
        { icon: 'fa fa-cog', title: 'Configuraciones', href: 'clientes/#' },
        { icon: 'fa fa-circle-info', title: 'Ayuda', href: 'clientes/#' },
        { icon: 'fa fa-lock', title: 'Contraseña', href: 'clientes/#' },
        { icon: 'fa fa-sign-out', title: 'Cerrar Sesión', href: '#' }
      ];
    } else if (url.startsWith('/empleados')) {
      this.menuItems = [
        { icon: 'fa fa-home', title: 'Home', href: 'clientes' },
        { icon: 'fa fa-user', title: 'Empleados', href: 'clientes/#' },
        { icon: 'fa fa-comment', title: 'Mensajes', href: 'clientes/#' },
        { icon: 'fa fa-cog', title: 'Configuraciones', href: 'clientes/#' },
        { icon: 'fa fa-circle-info', title: 'Ayuda', href: 'clientes/#' },
        { icon: 'fa fa-lock', title: 'Contraseña', href: 'clientes/#' },
        { icon: 'fa fa-sign-out', title: 'Cerrar Sesión', href: '#' }
      ];
    }
  }

  toggleMenu() {
    this.navActive = !this.navActive;
  }

  selectListItem(index: number) {
    this.selectedItem = index;
  }
}
