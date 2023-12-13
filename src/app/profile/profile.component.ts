import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ImageCroppedEvent, ImageCropperModule } from 'ngx-image-cropper';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    ImageCropperModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @ViewChild('cropper', { static: false }) cropper: any;
  selectedImage1: string | ArrayBuffer | null = null;
  selectedImage2: string | ArrayBuffer | null = null;
  imageChangeEvent: any = '';
  cropImagePreview: any = '';
  imgUpload: any = '../../assets/images/Ellipse 82.png';

  onFileChange(event: any) {
    this.imageChangeEvent = event;
    console.log(' working ');
  }
  cropImage(e: ImageCroppedEvent) {
    this.cropImagePreview = e.base64;
    console.log(e);
    this.cropImagePreview = e.objectUrl;
  }
  imgLoad() {}

  initCropper() {}

  imgFailed() {}

  uploadImage() {
    console.log('uploading Image');
    if (this.cropImagePreview) {
      // Set the cropped image to the profile image
      const profileImgElement: HTMLImageElement | null =
        document.getElementById('profileImg') as HTMLImageElement;
      if (profileImgElement) {
        profileImgElement.src = this.cropImagePreview;
      }
    }
  }

  onFileSelected1(event: any): void {
    const file = event.target.files[0];

    if (file) {
      // Check if the file type is either PNG or JPG
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        // Check if the file size is within the limit (5 MB)
        if (file.size <= 5 * 1024 * 1024) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.selectedImage1 = e.target?.result ?? null;
          };
          reader.readAsDataURL(file);
        } else {
          console.error('File size exceeds the limit (5 MB)');
          // Optionally, you can reset the file input
          // event.target.value = '';
        }
      } else {
        console.error(
          'Unsupported file type. Please select a PNG or JPG image.'
        );
        // Optionally, you can reset the file input
        // event.target.value = '';
      }
    }
  }

  onFileSelected2(event: any): void {
    const file = event.target.files[0];

    if (file) {
      // Check if the file type is either PNG or JPG
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        // Check if the file size is within the limit (5 MB)
        if (file.size <= 5 * 1024 * 1024) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.selectedImage2 = e.target?.result ?? null;
          };
          reader.readAsDataURL(file);
        } else {
          console.error('File size exceeds the limit (5 MB)');
          // Optionally, you can reset the file input
          // event.target.value = '';
        }
      } else {
        console.error(
          'Unsupported file type. Please select a PNG or JPG image.'
        );
        // Optionally, you can reset the file input
        // event.target.value = '';
      }
    }
  }

  profileFullName = new FormGroup({
    controlFullName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
  });
  get controlFullName() {
    return this.profileFullName.get('controlFullName');
  }

  profileEmail = new FormGroup({
    controlEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
  });
  get controlEmail() {
    return this.profileEmail.get('controlEmail');
  }

  profilePhone = new FormGroup({
    controlPhone: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.pattern('[0-9]+$'),
    ]),
  });
  get controlPhone() {
    return this.profilePhone.get('controlPhone');
  }

  profileCode = new FormGroup({
    controlCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      Validators.pattern('[0-9]+$'),
    ]),
  });
  get controlCode() {
    return this.profileCode.get('controlCode');
  }

  profileAddress = new FormGroup({
    controlAddress: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9\s,.'-/]*$/),
    ]),
  });
  get controlAddress() {
    return this.profileAddress.get('controlAddress');
  }

  profileCheckBox = new FormGroup({
    controlBox: new FormControl('', [Validators.required]),
  });
  get controlBox() {
    return this.profileCheckBox.get('controlBox');
  }


// this is image type validation function
  // profileImage = new FormGroup({
  //   controlImage: new FormControl('', [
  //     Validators.required,
  //     this.imageTypeValidator,
  //   ]),
  // });
  // get controlImage() {
  //   return this.profileImage.get('controlImage');
  // }
  // imageTypeValidator(control: FormControl): { [key: string]: boolean } | null {
  //   const value = control.value as File;
  //   if (value) {
  //     // Check if the file type is either PNG or JPG
  //     if (value.type !== 'image/png' && value.type !== 'image/jpeg') {
  //       return { invalidFileType: true };
  //     }
  //   }
  //   return null;
  // }


}
