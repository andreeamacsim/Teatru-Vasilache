import { Component } from '@angular/core';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrl: './funding.component.css'
})
export class FundingComponent {
  isDropdownOpen = false;

  
  declaratiiDeAvere = [
    { name: 'Declarație de avere 2024', link: 'public/declaratie_avere_2023.pdf' },
   
  ];

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
