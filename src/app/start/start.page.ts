import { Component, OnInit, } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  user: User;

  constructor(private storage: Storage) { }

  ngOnInit() {
    if ( this.user.didTheInitialTest == true ) {
      
    }
  }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
}
