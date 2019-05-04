import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { PaymentsComponent } from './payments/payments.component';
import { ContactComponent } from './contact/contact.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { TeamComponent } from './team/team.component';
import { FullguideComponent } from './fullguide/fullguide.component';
import { DeveloperComponent } from './developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    ComingsoonComponent,
    PaymentsComponent,
    ContactComponent,
    Project1Component,
    Project2Component,
    TeamComponent,
    FullguideComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
