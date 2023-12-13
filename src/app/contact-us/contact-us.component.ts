import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent, HeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  
  contactForm = new FormGroup({
    controlContactFName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    controlContactLName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    controlContactMail: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    controlContactPhone: new FormControl('', [Validators.required,Validators.pattern('[0-9]+$')]),
  });
  get controlContactFName() {
    return this.contactForm.get('controlContactFName');
  }
  get controlContactLName() {
    return this.contactForm.get('controlContactLName');
  }
  get controlContactMail() {
    return this.contactForm.get('controlContactMail');
  }
  get controlContactPhone() {
    return this.contactForm.get('controlContactPhone');
  }

}
