import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {LayoutComponent} from "./app.component.layout";
import {LeftComponent} from "./app.component.left";
import {MainComponent} from "./app.component.main";
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, LayoutComponent, LeftComponent, MainComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }