import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'crearUsuario',
        pathMatch: 'full',
        loadComponent: () => import('./Users/pages/crear-usuario/crear-usuario.component').then( m => m.CrearUsuarioComponent)
    },
    {
        path: 'verUsuarios',
        pathMatch: 'full',
        loadComponent: () => import('./Users/pages/ver-usuarios/ver-usuarios.component').then( m => m.VerUsuariosComponent)
    },
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('./Users/pages/home/home.component').then( m => m.HomeComponent)
    },
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];