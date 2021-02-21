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
  
  updateUserInfo() {

  }

}

