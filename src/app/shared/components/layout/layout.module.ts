import { BrowserModule }                from '@angular/platform-browser';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormWizardModule }             from 'angular2-wizard';
import { NgModule }                     from '@angular/core';
import { RouterModule }                 from '@angular/router';
// import { COMPILER_PROVIDERS }           from '@angular/compiler';
import { Select2Module }                from 'ng2-select2';
import { DndModule }                    from 'ng2-dnd';
import { NgxDatatableModule }           from '@swimlane/ngx-datatable';

// import { DynamicModule }                from '../dynamic-template/dynamic/dynamic.module';

import { HeaderComponent }              from './header/header.component';
import { BreadcrumbsComponent }         from './breadcrumbs/breadcrumbs.component';
import { ColorPickerComponent }         from './color-picker/color-picker.component';
import { SwitchLayoutComponent }        from './switch-layout/switch-layout.component';
import { ThemePickerComponent }         from './theme-picker/theme-picker.component';

import { HelperComponent }              from './helper/helper.component';
import { NotificationComponent }        from './notification/notification.component';
import { HelperExampleComponent }       from './helper/helper-example/helper-example.component';
import { ZionSelectComponent }          from './select/zion-select.component';
import { SelectExampleComponent }       from './select/select-example/select-example.component';

import { OneLevelSidebarComponent }     from './sidebar/one-level-sidebar/one-level-sidebar.component';
import { SidebarItemComponent }         from './sidebar/sidebar-item/sidebar-item.component';
import { TwoLevelSidebarComponent }     from './sidebar/two-level-sidebar/two-level-sidebar.component';
import { SidebarService }               from './sidebar/sidebar-shared/sidebar.service';

import { PopupComponent }               from './popup/popup.component';
import { PopupLinkComponent }           from './popup/popup-link/popup-link.component';

import { GridComponent }                from './grid/grid.component';
import { GridActionComponent }          from './grid/grid-dropdown/grid-action.component';

import { WizardService }                from './wizard/wizard-shared/wizard.service';
import { WizardComponent }              from './wizard/wizard.component';
import { WizardStepComponent }          from './wizard/wizard-step/wizard-step.component';
import { WizardExampleComponent }       from './wizard/wizard-example/wizard-example.component';
import { DrivenFormComponent }          from './wizard/driven-form/driven-form.component';
import { ReactiveFormComponent }        from './wizard/reactive-form/reactive-form.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        FormWizardModule,
        ReactiveFormsModule,
        Select2Module,
        NgxDatatableModule,
        // DynamicModule.forRoot(), // singletons
        DndModule.forRoot()
    ],
    declarations: [
        HeaderComponent,
        OneLevelSidebarComponent,
        TwoLevelSidebarComponent,
        BreadcrumbsComponent,
        ColorPickerComponent,
        SwitchLayoutComponent,
        SidebarItemComponent,
        PopupComponent,
        WizardComponent,
        WizardStepComponent,
        WizardExampleComponent,
        PopupLinkComponent,
        DrivenFormComponent,
        ReactiveFormComponent,
        HelperComponent,
        ZionSelectComponent,
        SelectExampleComponent,
        HelperExampleComponent,
        NotificationComponent,
        GridComponent,
        GridActionComponent,
        ThemePickerComponent
    ],
    exports: [
        HeaderComponent,
        OneLevelSidebarComponent,
        TwoLevelSidebarComponent,
        BreadcrumbsComponent,
        ColorPickerComponent,
        SwitchLayoutComponent,
        SidebarItemComponent,
        PopupComponent,
        WizardComponent,
        WizardStepComponent,
        WizardExampleComponent,
        PopupLinkComponent,
        DrivenFormComponent,
        ReactiveFormComponent,
        HelperComponent,
        ZionSelectComponent,
        SelectExampleComponent,
        HelperExampleComponent,
        DndModule,
        NotificationComponent,
        GridComponent,
        GridActionComponent,
        ThemePickerComponent
    ],
    providers: [
        SidebarService,
        WizardService,
    ],
    bootstrap: [
    ]
})

export class LayoutModule { }
