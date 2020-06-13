import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { TopTracks } from './models/topTracks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private http: SpotifyService) {

  }

  title = 'spotifyionic';
  topTracks: TopTracks[] = [];


  handleRefresh() {
    this.http.refreshSpotify().subscribe(value => console.log(value));
  }

  handleSpotify(method) {
    this.http.getStats(method).subscribe(value => {
      console.log(this.topTracks)
    });
  }


  getSpotify() {
    this.http.getSpotify().subscribe(value => console.log(value));
  }
}
