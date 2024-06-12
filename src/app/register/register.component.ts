import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/UserService';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSuccessful = false;
  loading = false;
  submitted = false;

  alert: any;
  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      mobile: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  SignupUser() {
    debugger
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService.SignupUser(this.registerForm.value)
      .subscribe(_data => {
        swal.fire({
          text: 'Registration successful',
          confirmButtonColor: "red",
        });

        //alert('Registration successful');
        this.router.navigate(['/login']);
      },
        _error => {
          this.loading = false;
          swal.fire({
            text: 'Registration failed!',
            confirmButtonColor: "red"
          });
        });
  }
}


