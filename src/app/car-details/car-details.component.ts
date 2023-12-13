import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderShortComponent } from '../header-short/header-short.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {

}
