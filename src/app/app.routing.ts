import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutRouteComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { PhotographyComponent } from './components/photography.component';
import { DevelopmentComponent } from './components/development.component';
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutRouteComponent
    },
    {
        path: 'development',
        component: DevelopmentComponent
    },
    {
        path: 'photography',
        component: PhotographyComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);