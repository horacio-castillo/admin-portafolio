import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', loadComponent: () =>
            import('./features/auth/pages/login/login')
                .then(m => m.LoginComponent)
    },
    {
        path: 'auth',
        children: [
            {
                path: 'register', loadComponent: () =>
                    import('./features/auth/pages/register/register.component')
                        .then(m => m.RegisterComponent)
            }
        ],
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./features/dashboard/dashboard.component')
                .then(m => m.DashboardComponent)
    }

];
