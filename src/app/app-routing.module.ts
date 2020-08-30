import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'favourite-movies', component: FavMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
