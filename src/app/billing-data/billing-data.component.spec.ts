import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDataComponent } from './billing-data.component';

describe('BillingDataComponent', () => {
  let component: BillingDataComponent;
  let fixture: ComponentFixture<BillingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
