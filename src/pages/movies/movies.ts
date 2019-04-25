import { Component } from '@angular/core';
import { MovieProvider} from '../../providers/movies/movies'

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies: any[]=[];
  constructor(private mp:MovieProvider) {
  }

  ionViewDidLoad() {
    this.mp.getMovies().subscribe(data =>
    {
      this.movies = data.Search;
    });
  }

}
