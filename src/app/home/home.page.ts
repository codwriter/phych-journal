import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: User = { username: '', firstTestScore: 0, didTheInitialTest: false, everyDayScore: [] };
  constructor( private storage: Storage,
    private router: Router ) { }
  
  ngOnInit() {} 
}
