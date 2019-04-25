import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the MoviesProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
constructor(public http: HttpClient) {
console.log('Hello MovieProvider Provider');
}
getMovies(): Observable<any>{
return this.http.get("http://www.omdbapi.com/?apikey=121c2657&s=senna");
  }
}
