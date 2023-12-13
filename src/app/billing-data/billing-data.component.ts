import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-billing-data',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './billing-data.component.html',
  styleUrl: './billing-data.component.css'
})
export class BillingDataComponent {

  showContent: boolean = false;

  toggleContent() : any {
    // if (this.showContent === false) {
    //   this.showContent = true;      
    // } else {
    //   this.showContent = false; 
    // }

    this.showContent = !this.showContent
  }
}
