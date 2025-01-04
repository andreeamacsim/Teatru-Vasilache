import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityToolbarService {
  private toolbarVisibility = new BehaviorSubject<boolean>(false);
  currentVisibility = this.toolbarVisibility.asObservable();

  toggleToolbar() {
    this.toolbarVisibility.next(!this.toolbarVisibility.value);
  }
}
