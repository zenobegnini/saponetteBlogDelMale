import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        

    },
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
    },
    
];
