import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ticketInfoVisible: boolean = false;

  toggleTicketInfo() {
    this.ticketInfoVisible = !this.ticketInfoVisible;
    const ticketInfo = document.querySelector('.ticket-info-content') as HTMLElement;
    if (this.ticketInfoVisible) {
      ticketInfo.style.display = 'block'; 
    } else {
      ticketInfo.style.display = 'none'; 
    }
  }

  
}