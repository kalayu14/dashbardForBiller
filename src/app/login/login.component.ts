import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/UserModel';
import { UserService } from '../Service/UserService';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  email: string;
  password: string;
  user: User;
  areCredentialsInvalid = false;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  loginUser() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.userService.loginUser(this.email, this.password).subscribe({
      next: (response: User) => {
        this.userService.setToken(response.token);
        console.log("User is logged in");
        this.router.navigate(['/dashboard']);
      },
      error: (_error) => {
        this.loading = false;
        swal.fire({
          text: 'Invalid username or password!',
          confirmButtonColor: "red"
        });
      }
    });
  }

}
