import { Component} from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signUp() {
    this.authService.signup({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => this.errorMsg = error.message);
  }



}
