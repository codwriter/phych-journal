import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';

@Injectable( {
  providedIn: 'root'
} )
export class UserGuard implements CanActivate {
  constructor( private storage: Storage, private router: Router ) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Promise<boolean> {
    let user: User;
    user = await this.storage.get( 'user' );
    if ( !user ) {
      this.storage.set( 'user', user );
      this.router.navigateByUrl( '/intro' );
    }
    else if(user.didTheInitialTest==false){
      this.router.navigateByUrl( '/intro' );
    }   
    return user.didTheInitialTest;
  }

}
