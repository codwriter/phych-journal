import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {
  user: User = { username: '', didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };
  constructor( private storage: Storage ) { }

  async getUserInfo(): Promise<User | any> {
   return this.user =  await this.storage.get( 'user' );
  }
  
  updateUserInfo(user:User){
  this.storage.set( "user", user );
  }
  addDummydata() {
    this.user = {
      username: "test", didTheInitialTest: true, firstTestScore: 110, everyDayScore: [ { date: "1/3/2020", score: 15 },
      { date: "1/3/2020", score: 15 },
      { date: "1/3/2020", score: 12 },
      { date: "1/3/2020", score: 11 } ]
    };
    this.storage.set( "user", this.user );
}
}

