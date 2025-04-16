import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';


import { /*HttpClient,*/ provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import MyPreset from './mypreset';


export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    importProvidersFrom(
      CommonModule, 
      BrowserAnimationsModule, 
    ),
    provideHttpClient(),
    // providePrimeNG({ /* options */ }),
    providePrimeNG({
      theme: {
        // preset: Aura
        preset: MyPreset
      }
    }),
    provideRouter(routes),
    
    MessageService,
    ConfirmationService,
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync()
  ]
};
