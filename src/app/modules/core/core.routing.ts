import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';

export const coreRoutes: Routes = [{
    path: '',
    component: CoreComponent,
    children: [
      { path: 'wizard', component: DashboardComponent},
      { path: 'forms', component: FormsComponent},
      { path: 'grid', component: TableComponent}
    ]
}];

export const appRoutingProviders: any[] = [];
export const coreRouting: ModuleWithProviders = RouterModule.forChild(coreRoutes);