import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderShortComponent } from '../header-short/header-short.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {

}
