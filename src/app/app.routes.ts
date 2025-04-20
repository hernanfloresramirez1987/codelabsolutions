import { Routes } from '@angular/router';
// import { Crud } from './pages/crud/crud';
// import { Empty } from './pages/empty/empty';

export const routes: Routes = [
    // { path: 'documentation', component: Documentation },
    // { path: 'crud', component: Crud },
    // { path: 'empty', component: Empty },
    { path: '', loadComponent: () => import('./pages/home/home.component')},
    { path: 'guest', loadComponent: () => import('./pages/guest/guest.component')},
    { path: '**', redirectTo: '/notfound' }
];
