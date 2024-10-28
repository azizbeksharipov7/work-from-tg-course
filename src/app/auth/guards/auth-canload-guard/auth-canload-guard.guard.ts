import { Injectable } from '@angular/core';
import { CanMatch, UrlTree } from '@angular/router';
import {  Observable } from 'rxjs';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCanloadGuard implements CanMatch {
  constructor (private authService: AuthService){}
  canMatch(): Observable<boolean | UrlTree>{
    return this.authService.canGuardLoad(true)
  }
}

@Injectable({
  providedIn: 'root'
})

export class AuthCantloadGuard  implements CanMatch {
  constructor ( private authService: AuthService){}
  canMatch(): Observable<boolean | UrlTree>{
    return this.authService.canGuardLoad(false)
  }
}