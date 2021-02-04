import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Podcast } from '../shared/podcast';
import { Movie } from '../shared/movie';
import { Book } from '../shared/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable( {
  providedIn: 'root'
} )
export class ResourcesService {

  constructor( private http: HttpClient,
    private ProcessHTTPMsgService: ProcessHTTPMsgService ) { }

  getPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>( baseURL + 'podcasts' )
      .pipe( catchError( this.ProcessHTTPMsgService.handleError ) );
  }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>( baseURL + 'books' )
      .pipe( catchError( this.ProcessHTTPMsgService.handleError ) );
  }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>( baseURL + 'movies' )
      .pipe( catchError( this.ProcessHTTPMsgService.handleError ) );
  }
}
