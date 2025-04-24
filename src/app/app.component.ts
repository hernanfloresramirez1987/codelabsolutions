import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';

import { CarouselModule } from 'primeng/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { TopbarComponent } from './pages/components/topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    SidebarModule,
    FormsModule,
    CarouselModule,
    TranslateModule,
    TopbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codelabsolutions';
  sidebarVisible = false;

  currentIndex = 0;

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

  constructor() {
    // TranslateModule.forRoot({
    //   defaultLanguage: 'es'
    // })
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }


  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  ];
  responsiveOptions: any[] | undefined;




//   items: MenuItem[] = [
//     {
//         label: 'Home',
//         icon: 'pi pi-home'
//     },
//     {
//         label: 'Features',
//         icon: 'pi pi-star'
//     },
//     {
//         label: 'Projects',
//         icon: 'pi pi-search',
//         items: [
//             {
//                 label: 'Components',
//                 icon: 'pi pi-bolt'
//             },
//             {
//                 label: 'Blocks',
//                 icon: 'pi pi-server'
//             },
//             {
//                 label: 'UI Kit',
//                 icon: 'pi pi-pencil'
//             },
//             {
//                 label: 'Templates',
//                 icon: 'pi pi-palette',
//                 items: [
//                     {
//                         label: 'Apollo',
//                         icon: 'pi pi-palette'
//                     },
//                     {
//                         label: 'Ultima',
//                         icon: 'pi pi-palette'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Contact',
//         icon: 'pi pi-envelope'
//     }
// ]

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
