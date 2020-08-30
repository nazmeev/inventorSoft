import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.scss'],
})
export class FavMoviesComponent implements OnInit {
  public movies = [];
  isEmpty: boolean = true;
  favCost: number = 0;

  addFavourite() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
    this.favCost = 0;
    this.favCost = this.calcCost();
  }

  onBtnClick() {
    localStorage.clear();
    this.movies = [];
    this.favCost = 0;
  }

  calcCost() {
    return this.movies.reduce((prevItem, currentItem) => {
      return currentItem.isFavourite ? prevItem + currentItem.price : prevItem;
    }, this.favCost);
  }

  constructor() {}

  ngOnInit(): void {
    this.movies = JSON.parse(localStorage.getItem('movies'));
    if (this.movies) {
      this.favCost = this.calcCost();
    }
  }
}
