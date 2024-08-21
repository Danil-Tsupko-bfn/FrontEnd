import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { bootstrapApplication } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},

];
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});