import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-home',
  imports: [MenubarModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  items: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home' },
    { label: 'Servicios', icon: 'pi pi-cog' },
    { label: 'Contacto', icon: 'pi pi-envelope' }
  ];
}
