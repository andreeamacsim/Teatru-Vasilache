import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FundingComponent } from './funding/funding.component';
import { AccessibilityToolbarComponent } from './accessibility-toolbar/accessibility-toolbar.component';
import { AccessibilityToolbarService } from './accessibility-toolbar.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyTicketComponent,
    NewsComponent,
    TeamComponent,
    ShowsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    FundingComponent,
    AccessibilityToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
