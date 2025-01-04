import { TestBed } from '@angular/core/testing';

import { AccessibilityToolbarService } from './accessibility-toolbar.service';

describe('AccessibilityToolbarService', () => {
  let service: AccessibilityToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilityToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
