import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

import {  AlertService } from '../../services/alert.service';

import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {


  model: any = {};
  loading = false;

  returnUrl: string;
  constructor(private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private route: ActivatedRoute,) { }

  ngOnInit() {

    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.email , this.model.password)
        .subscribe(
            data => {

              localStorage.setItem('token', JSON.stringify(data.token));
              
                this.alertService.success('login successful', true);
                this.router.navigate(['/layout/overview']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
