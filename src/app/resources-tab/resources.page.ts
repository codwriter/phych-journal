import { Component, OnInit, Inject } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { Book } from '../shared/book';
import { Movie } from '../shared/movie';
import { Podcast } from '../shared/podcast';
import resources from '../shared/resources.json'
@Component( {
  selector: 'app-resources',
  templateUrl: 'resources.page.html',
  styleUrls: [ 'resources.page.scss' ]
} )
export class ResourcesPage {
  podcasts: Podcast[] ;
  books: Book[];
  movies: Movie[];
  errMess: String;
  resources: any = resources;
  constructor( private resoursesservice: ResourcesService,
    @Inject( 'BaseURL' ) private BaseURL ) { }

  ngOnInit() {
/*     this.resoursesservice.getPodcasts()
      .subscribe( podcasts => this.podcasts = podcasts,
        errmess => this.errMess = <any>errmess );

    this.resoursesservice.getBooks()
      .subscribe( books => this.books = books,
        errmess => this.errMess = <any>errmess );

    this.resoursesservice.getMovies()
      .subscribe( movies => this.movies = movies,
        errmess => this.errMess = <any>errmess );
 */
  }
}
