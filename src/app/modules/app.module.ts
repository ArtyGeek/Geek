import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';
import { appRouting }               from './app.routing';
import { CoreModule }               from './core/core.module';
import { AppComponent }             from './app.component';
import { StructureService }         from '../shared/services/structure.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        appRouting,
        CoreModule
    ],
    providers: [
        StructureService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
