import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketComponent } from './buy-ticket.component';

describe('BuyTicketComponent', () => {
  let component: BuyTicketComponent;
  let fixture: ComponentFixture<BuyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
