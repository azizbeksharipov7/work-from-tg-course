import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn= new BehaviorSubject(false)
  constructor(private router: Router, private http:HttpClient) { }
  testHttp(){
   return this.http.get("http://reqres.in/api/users?page=2")
  }



  login(){
    this.isUserLoggedIn.next(true)
  }

  canGuardLoad( isUserExist:boolean ){
    return this.isUserLoggedIn.pipe(map((userState: boolean) => {
      if(isUserExist){
          return userState? true: this.router.createUrlTree(['menu'])
      }else 
        return userState? this.router.createUrlTree(['menu']):true
    }));
   }
}
