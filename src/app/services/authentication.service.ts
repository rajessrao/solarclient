import { Injectable } from '@angular/core';

import { Http ,Headers, Response} from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { appConfig } from '../app.config';
import { Router } from '@angular/router';




import { User } from '../models/user';
//import { Plant } from '../models/plant';
import { Token } from '@angular/compiler';

import { LoginComponent } from '../views/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router,private https: Http) { }

  register(user: User) {
    return this.http.post(appConfig.apiUrl + '/users/register', user, );
}

login(email: string, password: string){
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { email: email, password: password }, { headers : headers })
  .map(user => {
  
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
         
      }

      return user;
  });
}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}

/* 
plant(token:string) {

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  headers.append("x-access-token", token);

  
  console.log(headers);
  console.log(token);
  return this.https.post('http://localhost:4000/api/plants',{"x-access-token": token}, {headers:headers})
  .map((response: Response) => {
    console.log(response);
    var result = response.json();
    return result;
  })
} */

/* 
dashboard(token:string){

      
var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  headers.append("x-access-token", token);

  console.log(token);
  
  console.log(headers);
  return this.https.post("http://localhost:4000/api/dashboards/user", {"x-access-token" : token},{ headers: headers })
      .map((response: Response) => {
        console.log(response);
        var result = response.json();
        return result;
      }) 

} */


showTodayDate() {
  let ndate = new Date();
  return ndate;
}

}
