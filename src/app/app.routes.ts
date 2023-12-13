import { Routes } from '@angular/router';
import { BillingDataComponent } from './billing-data/billing-data.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginShortComponent } from './login-short/login-short.component';
import { LoginComponent } from './login/login.component';
import { OTPVerificationComponent } from './otp-verification/otp-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'otp-verification',
    component: OTPVerificationComponent,
  },
  {
    path: 'login',
    component: LoginShortComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'favourite',
    component: FavouriteComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'vehicle-listing',
    component: VehicleListingComponent,
  },
  {
    path: 'vehicle-listing/car',
    component: CarDetailsComponent,
  },
  {
    path: 'vehicle-listing/car/billing',
    component: BillingDataComponent,
  },
 
  
];
