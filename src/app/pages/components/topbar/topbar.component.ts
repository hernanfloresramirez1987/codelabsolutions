import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

import { MegaMenu } from 'primeng/megamenu';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [MenubarModule, ToolbarModule, RouterModule, AvatarModule, ButtonModule, MegaMenu, FormsModule, NgClass],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  sidebarVisible = false;

  items0: MegaMenuItem[] =
    [{
      label: 'Company',
      root: true,
      items: [
        [
          {
            items: [
              { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
              { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
              { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
              { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
              { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
              { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
              { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
          }
        ]
      ]
    },
    {
      label: 'Services',
      root: true,
      items: [
        [
          {
            items: [
              { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
              { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
              { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
              { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
              { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
              { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
              { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
          }
        ]
      ]
    },
    {
      label: 'Resources',
      root: true
    },
    {
      label: 'Contact',
      root: true
    }
    ];


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
