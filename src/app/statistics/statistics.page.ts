import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';

@Component( {
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: [ './statistics.page.scss' ],
} )
export class StatisticsPage {
  user: User = { username: "", didTheInitialTest: false, everyDayScore: [], firstTestScore: 0 };
  constructor( private userSrv: UserService ) {
    this.userSrv.getUserInfo().then( user => this.user = user );
  }

  @ViewChild( 'barChart' ) barChart;

  bars: any;
  colorArray: any;


  ionViewDidEnter() {
    this.createBarChart();
  }

  stats = () => {
    let chartObj = { scoreArray: [], days: [], dates: [] }
    for ( let score of this.user.everyDayScore ) {
      let day = new Date( score.date ).getDate();
      let date = new Date( score.date ).toDateString();
      if ( !chartObj.days.includes( day ) ) {
        chartObj.days.push( day );
        chartObj.dates.push( date );
      }
      console.log( score );
    }
    for ( let day of chartObj.days ) {
      let average = 0;
      let sum = 0;
      let i = 0;
      for ( let score of this.user.everyDayScore ) {
        let date = new Date( score.date ).getDate();
        if ( date === day ) {
          sum += score.score;
          i++;
          console.log( "sum", sum );
          console.log( "day", day );
        }
      }
      average = sum / i;
      chartObj.scoreArray.push( average );
    }
    return chartObj;
  }

  createBarChart() {
    this.bars = new Chart( this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.stats().dates,
        datasets: [ {
          label: 'Test scores',
          data: this.stats().scoreArray,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        } ]
      },
      options: {
        scales: {
          yAxes: [ {
            ticks: {
              beginAtZero: true
            }
          } ]
        }
      }
    } );
  }
}
