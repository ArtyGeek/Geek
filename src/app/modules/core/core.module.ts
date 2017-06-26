import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { LayoutModule } from './../../shared/components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutModule,
        FormsModule
    ],
    declarations: [
        CoreComponent,
        DashboardComponent,
        FormsComponent,
        TableComponent
    ],
    providers: [

    ]
})
export class CoreModule { }
