import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';
import { LayoutComponent } from "./app.component.layout";
import { LeftComponent } from "./app.component.left";
import { MainComponent } from "./app.component.main";
import { AppService } from "./app.service";

@NgModule({
    imports:      [ BrowserModule, HttpModule, ],
    declarations: [ AppComponent, LayoutComponent, LeftComponent, MainComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ AppService ],
})
export class AppModule { }