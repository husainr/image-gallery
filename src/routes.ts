import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthenticationGuard } from './app/services/authenticationGuard.service';
import {ImageDetailComponent} from './app/image-detail/image-detail.component';
import {SignupComponent} from './app/signup/signup.component';

export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
  { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];
