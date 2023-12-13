import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginShortComponent } from './login-short.component';

describe('LoginShortComponent', () => {
  let component: LoginShortComponent;
  let fixture: ComponentFixture<LoginShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginShortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
