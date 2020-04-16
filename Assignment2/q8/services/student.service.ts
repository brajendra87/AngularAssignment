import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentService implements CanActivate {

  
  isSubmitted: boolean = false;
  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.isSubmitted == false) {
      if(confirm("Are you sure you want to discard the  changes ?"))
      {
        // Todo - as per requirement
      }
    }
    return this.isSubmitted;
  }
}
