import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../Model/UserModel";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

   url: string = "https://api.efile.mor.derash.gov.et/api/user";
    //url: string = "https://api.billerreport.derash.gov.et/api/user";
    // router: any;

    constructor(private http: HttpClient) { }
    //login service
    loginUser(email: string, password: string): Observable<User> {
        return this.http.post<User>(this.url + "/login", { email: email, password: password });
    }

    //Registration Service
    SignupUser(user: User) {
        return this.http.post(this.url + "/signup", user);
    }

     logout() {
         // remove user from local storage to log user out
         localStorage.removeItem('currentUser');
        // this.router.navigate(['/']);
     } 

     // Auth methods
      setToken(token) {
        localStorage.setItem('token', token);
      }
    
      getToken() {
        return localStorage.getItem('token');
      }
    
      deleteToken() {
        localStorage.removeItem('token');
      }
    
      getUserPayload() {
        var token = this.getToken();
        if (token) {
          var userPayload = atob(token.split('.')[1]);
          return JSON.parse(userPayload);
        }
        else
          return null;
      }
    
      isLoggedIn() {
          debugger
        var userPayload = this.getUserPayload();
       
        if (userPayload)
         
          return userPayload.exp > Date.now() / 1000;
         
        else
          return false;
      }
}
