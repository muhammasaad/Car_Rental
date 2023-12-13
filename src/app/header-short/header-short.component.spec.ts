import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShortComponent } from './header-short.component';

describe('HeaderShortComponent', () => {
  let component: HeaderShortComponent;
  let fixture: ComponentFixture<HeaderShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderShortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
