import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActiveTabService } from '../active-tab.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  
  activeIndex: number = 0;
  
  login: boolean = false;
  constructor(private loginService : ActiveTabService) {
    this.login  = loginService.login 
  }
  tabs: { title: string }[] = [
    { title: 'Home' },
    { title: 'Vehicle Listing' },
    { title: 'Contact Us' },
  ];

  @ViewChild('subMenu') subMenu!: ElementRef;

  toggleMenu() {
    let opened = this.subMenu.nativeElement.classList.contains('open-menu');

    if (opened) {
      this.subMenu.nativeElement.classList.remove('open-menu');
    } else {
      this.subMenu.nativeElement.classList.add('open-menu');
    }
  }

  setActive(index: number): any {
    this.activeIndex = index;
  }

  getRouterLink(index: number): string {
    const routes = ['/', '/vehicle-listing', '/contact-us'];
    return routes[index];
  }
}
