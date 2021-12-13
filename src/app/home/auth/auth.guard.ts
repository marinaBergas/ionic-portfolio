import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
    const url: string =state.url;
    return this.checkLogin(url);

  }
  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
    return this.canActivate(route,state);
  }
  checkLogin(url: string){
    if(this.authService.isLoggedIn()){
      return true ;
    }else{
      this.authService.redirectUrl = url;
      this.router.navigate(['/sign-in'],{queryParams:{returnUrl:url}})   ;
      return false;
    };
  };
};
