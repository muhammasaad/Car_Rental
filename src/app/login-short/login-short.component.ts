import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActiveTabService } from '../active-tab.service';


@Component({
  selector: 'app-login-short',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login-short.component.html',
  styleUrl: './login-short.component.css'
})
export class LoginShortComponent {
  login: boolean = false;
  constructor(private loginService: ActiveTabService) {
    
  }
  loginForm = new  FormGroup({
    controlEmail: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    controlPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  loginUser(){
    console.log(this.loginForm.value)
  }

  get controlEmail(){
    return this.loginForm.get('controlEmail')
  }
  get controlPassword(){
    return this.loginForm.get('controlPassword')
  }
  loginBtn(){
    this.login = true
    this.loginService.login = this.login
  }
}
