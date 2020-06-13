import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'toptracks', component: TopTracksComponent },
  { path: 'topartists', component: TopArtistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
