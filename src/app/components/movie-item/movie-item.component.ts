import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  btnString: string;

  checkFavourite() {
    this.btnString = this.movie.isFavourite ? 'Favorite' : 'Add to favorite';
  }

  onClick() {
    this.movie.isFavourite = !this.movie.isFavourite;
    this.checkFavourite();
    this.addFavourite.emit();
  }

  constructor() {}

  ngOnInit(): void {
    this.checkFavourite();
  }

  @Input() movie: any;

  @Output() addFavourite = new EventEmitter();
}
