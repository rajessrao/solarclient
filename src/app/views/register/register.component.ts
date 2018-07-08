
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

import {  AlertService } from '../../services/alert.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService) { }


  register() {
    this.loading = true;

    this.authService.register(this.model)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}


  ngOnInit() {
  }

}
