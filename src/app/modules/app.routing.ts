import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { coreRoutes } from './core/core.routing';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'wizard', pathMatch: 'full' },
    ...coreRoutes
];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });

