import { Routes } from '@angular/router';
import { LoginRoutes } from './login/login.router';
import { HomeRoutes } from './home/home.router';

export const routes: Routes= [...LoginRoutes, ...HomeRoutes]