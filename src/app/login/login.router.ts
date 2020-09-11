import { Route } from '@angular/router'
import { LoginComponent } from './login.component';
import { LoginGuard } from '../guards/login.guard';

export const LoginRoutes: Route []= [
    {
        path: 'login' , component: LoginComponent, canActivate: [LoginGuard]
    }
]