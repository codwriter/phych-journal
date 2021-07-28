import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component( {
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: [ './popover.component.scss' ],
} )
export class PopoverComponent implements OnInit {

  constructor( private router: Router, private ctrlPopover: PopoverController ) { }

  ngOnInit() { }

  openStatistics() {
    this.router.navigateByUrl( 'statistics' );
    this.ctrlPopover.dismiss();
  }
}
