import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule,RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new  FormGroup({
    controlEmail: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    controlPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  get controlEmail(){
    return this.loginForm.get('controlEmail')
  }
  get controlPassword(){
    return this.loginForm.get('controlPassword')
  }


   loginUser(){
    console.log(this.loginForm.value)
  }
  
}
