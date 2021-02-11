import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
  constructor( private storage: Storage,
    private router: Router ) { }
  
  ngOnInit() {
    this.storage.get( 'user' ).then( user => {
      if ( user ) {
        console.log( user );
        this.user = user;
        if ( this.user.didTheInitialTest == false ) {
          this.router.navigateByUrl( '/intro' );
        }
      }
      else
        console.log( 'user not defined' );
        this.router.navigateByUrl( '/intro' );
    } );
  }
}
