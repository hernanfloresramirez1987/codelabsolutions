import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';


import { /*HttpClient,*/ HttpClient, provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import MyPreset from './mypreset';

import {provideTranslateService, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      CommonModule, 
      BrowserAnimationsModule,
      [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
        })
      ],
      TranslateModule.forRoot({
        defaultLanguage: 'es'
      })
    ),
    provideHttpClient(),
    // providePrimeNG({ /* options */ }),
    providePrimeNG({
      theme: {
        preset: Aura
        // preset: MyPreset
      }
    }),
    provideExperimentalZonelessChangeDetection(),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    
    MessageService,
    ConfirmationService,
    provideRouter(routes),
    // provideAnimations(),
    provideAnimationsAsync(),
    provideTranslateService({
      defaultLanguage: 'en'
     })
  ]
};
