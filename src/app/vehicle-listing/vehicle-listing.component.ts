import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderShortComponent } from '../header-short/header-short.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-vehicle-listing',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './vehicle-listing.component.html',
  styleUrl: './vehicle-listing.component.css'
})
export class VehicleListingComponent {
}
