import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OTPVerificationComponent } from './otp-verification/otp-verification.component';
import { LoginShortComponent } from './login-short/login-short.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BillingDataComponent } from './billing-data/billing-data.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, CarDetailsComponent, BillingDataComponent, HeaderComponent,HomeComponent, FooterComponent, SigninComponent, LoginComponent, ForgetPasswordComponent, OTPVerificationComponent, LoginShortComponent, FavouriteComponent, VehicleListingComponent, HistoryComponent, ProfileComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental';
}
