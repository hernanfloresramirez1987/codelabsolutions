import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-topbar',
  imports: [MenubarModule, ToolbarModule, RouterLink, AvatarModule, ButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  sidebarVisible = false;

  items = [
    {
        label: 'Guest',
        icon: 'pi pi-home',
    },
    {
        label: 'Admin',
        icon: 'pi pi-search',
        badge: '3',
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S',
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B',
            },
            {
                separator: true,
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U',
            },
        ],
    },
    {
      label: 'Services',
      icon: 'pi pi-search',
      badge: '3',
      items: [
          {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S',
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B',
          },
          {
              separator: true,
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U',
          },
      ],
    },
    {
      label: 'In Build',
      icon: 'pi pi-search',
      badge: '3',
      items: [
        {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
        },
        {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
        },
        {
            separator: true,
        },
        {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
        },
      ],
    },
  ];


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
