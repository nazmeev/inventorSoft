import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../config/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies = [];

  getItemsFromStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  addFavourite() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  constructor(private _MovieService: MovieService) {}

  ngOnInit(): void {
    if (this.getItemsFromStorage('movies')) {
      this.movies = this.getItemsFromStorage('movies');
    } else {
      this._MovieService.getMovies().subscribe((data) => (this.movies = data));
    }
  }
}
