/**
 * Created by Алексей on 18.09.2016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';

// Angular 2 is running in the development mode. Call enableProdMode()
// https://github.com/angular/angular/issues/6189
enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
