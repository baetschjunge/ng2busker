import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';

// Pages
import { HomeComponent } from './components/home.component';
import { AboutRouteComponent } from './components/about.component';
import { PhotographyComponent } from './components/photography.component';
import { DevelopmentComponent } from './components/development.component';

// Sections|Landmarks @static
import { HeaderComponent } from './components/Sections/header.component';
import { FooterComponent } from './components/Sections/footer.component';

// Module
import { UserComponent } from './components/user.component';


import { routing } from './app.routing';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AboutRouteComponent,
    HomeComponent,
    PhotographyComponent,
    DevelopmentComponent
  ],

  bootstrap:    [
    AppComponent
  ]

})

export class AppModule { }
