import { Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {
        path: '',
        component: ErrorpageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
