import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn:'root'
// })

export const authGuard : CanActivateFn = (route, state) => {

  // constuctor(private router:Router){}

  // if(localStorage.getItem('logindata')){
    return true;
  // }
    // else{
      // this.router.navigate(["/"]);
    //   alert("You can't access this page without login");
    //   return false;
    // }
  
};
