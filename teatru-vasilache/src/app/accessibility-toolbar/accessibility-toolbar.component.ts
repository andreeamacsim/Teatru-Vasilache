import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility-toolbar',
  templateUrl: './accessibility-toolbar.component.html',
  styleUrls: ['./accessibility-toolbar.component.scss']
})
export class AccessibilityToolbarComponent {
  
  isToolbarVisible: boolean = false;
  private currentFontSize: number = 16; 

  toggleToolbar() {
    this.isToolbarVisible = !this.isToolbarVisible;
  }

 
  increaseTextSize() {
    this.currentFontSize += 1;
    document.body.style.fontSize = `${this.currentFontSize}px`;
  }


  decreaseTextSize() {
    if (this.currentFontSize > 1) {
      this.currentFontSize -= 1;
      document.body.style.fontSize = `${this.currentFontSize}px`;
    }
  }


  toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }

  invertColors() {
    document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'none' : 'invert(1)';
  }

 
  underlineLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => (link.style.textDecoration = 'underline'));
  }

 
  resetAccessibility() {
    this.currentFontSize = 16;
    document.body.style.fontSize = '';
    document.body.style.filter = '';
    document.body.classList.remove('high-contrast');
    const links = document.querySelectorAll('a');
    links.forEach(link => (link.style.textDecoration = 'none'));
  }
}
