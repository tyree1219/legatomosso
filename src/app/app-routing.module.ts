import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DeveloperComponent } from './developer/developer.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'comingsoon', component: ComingsoonComponent },
{ path: 'payments', component: PaymentsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'project1', component: Project1Component },
{ path: 'project2', component: Project2Component },
{ path: 'team', component: TeamComponent },
{ path: 'developer', component: DeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
