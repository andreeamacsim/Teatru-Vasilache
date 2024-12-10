import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactComponent } from './contact/contact.component';
import { FundingComponent } from './funding/funding.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buy-ticket', component: BuyTicketComponent },
  { path: 'news', component: NewsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'funding', component: FundingComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
