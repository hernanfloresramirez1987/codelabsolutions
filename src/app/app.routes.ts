import { Routes } from '@angular/router';
import { Documentation } from './pages/documentation/documentation';
import { Crud } from './pages/crud/crud';
import { Empty } from './pages/empty/empty';

export const routes: Routes = [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
];
