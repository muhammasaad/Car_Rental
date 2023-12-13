import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-short',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header-short.component.html',
  styleUrl: './header-short.component.css'
})
export class HeaderShortComponent {
  @ViewChild('subMenu') subMenu!: ElementRef;

  toggleMenu() {
    let opened = this.subMenu.nativeElement.classList.contains('open-menu');

    if (opened) {
      this.subMenu.nativeElement.classList.remove('open-menu');
    } else {
      this.subMenu.nativeElement.classList.add('open-menu');
    }
  }
}
