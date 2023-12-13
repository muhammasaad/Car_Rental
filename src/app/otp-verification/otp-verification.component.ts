import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css',
})
export class OTPVerificationComponent implements OnInit {
  time: number = 59;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
    }, 1000);
  }
  focusNext(nextInput: HTMLInputElement) {
    if (nextInput) {
      nextInput.focus();
    }
  }

  otpForm = new  FormGroup({
    controlOTP: new FormControl('', [Validators.required, Validators.minLength(1)]),
    controlOTPlast: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  get controlOTP(){
    return this.otpForm.get('controlOTP')
  }
  get controlOTPlast(){
    return this.otpForm.get('controlOTPlast')
  }
}
