import { Component, OnInit,Input,Output, EventEmitter, HostListener } from '@angular/core';
import { WeatherService } from '../../weather.service';
import {  AlertService } from '../../services/alert.service';
import { DashboardService} from "../../services/dashboard.service";
import { AuthenticationService } from '../../services/authentication.service';

import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { Plant} from '../../models/plant';
import { LoginComponent } from '../login/login.component';

import { FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import { Dashboard } from '../../models/dashboard';
import {  HttpHeaders, HttpRequest  } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { Dashboard } from '../../models/dashboard';

import { Plant} from '../../models/plant';
import { Weather } from '../../models/weather'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  city = 'Hyderabad';
  state = 'Telangana';
  weather:Weather[];
  weatherr:any;
  token:any;
  results:Dashboard[];
  dashresult:any;


  lat: Number = 51.678418;
  lng: Number = 7.809007;
  constructor(private wservice: WeatherService,private router: Router,
    private dashService: DashboardService,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private route: ActivatedRoute,private http: Http,private https: HttpClient) { 


    }

  ngOnInit() {
    this.wservice.getWeather(this.city, this.state).subscribe(weather => {

      this.weatherr = weather;
      console.log(this.weatherr);
    });

    var token= localStorage.getItem('token');
    this.token = token.replace(/\"/g, "");
    console.log(token);
    this.dashService.dashboard(this.token).subscribe(result=>{this.dashresult=result});
  
  }
}
