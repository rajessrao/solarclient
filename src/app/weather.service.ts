
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apikey = "f7a632bc6499896620721cb8308048f0";
  city='Hyderabad';


  constructor(private _http: HttpClient) {
    }
    getWeather(city,state) {
      //console.log("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.apikey + "&units=metric");
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.apikey + "&units=metric")
      .map(result => result);
  }
}

