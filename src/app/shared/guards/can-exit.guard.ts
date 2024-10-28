import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivate{
  canExit(): boolean;
}

@Injectable({
  providedIn:'root'
})
export class CanExitGuard implements CanDeactivate<IDeactivate> {
canDeactivate(
  component:IDeactivate,
  currentRote:ActivatedRouteSnapshot,
  currentState:RouterStateSnapshot,
  nextState?:RouterStateSnapshot
):
|Observable<boolean|UrlTree>
|Promise<boolean|UrlTree>
|boolean
|UrlTree{
  return component.canExit()
}

}

