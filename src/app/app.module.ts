import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CalculatePairComponent } from './components/calculate-pair/calculate-pair.component';
import { CalculationsComponent } from './components/calculations/calculations.component';

@NgModule({ declarations: [
        AppComponent,
        CalculatorComponent,
        CalculatePairComponent,
        CalculationsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
