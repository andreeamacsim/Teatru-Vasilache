import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrl: './buy-ticket.component.css'
})
export class BuyTicketComponent {
  constructor() {
    window.location.href = 'https://www.entertix.ro/g/334/teatrul-pentru-copii-si-tineret-vasilache.html?fbclid=IwAR0DheDAzYd-dqGtBwujFhODuS3UAXbVWASqeQxmuM1Jg-DmSNfJ4ATr5rA';
  }
}
