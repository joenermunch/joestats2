import { Component, OnInit } from '@angular/core';
import { TopArtists } from 'src/app/models/topArtists';
import { SpotifyService } from 'src/app/services/spotify.service';
import { TopTracks } from 'src/app/models/topTracks';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {

  constructor(private http: SpotifyService) { }

  topArtists: TopArtists[] = history.state.topArtists;
  topTracks: TopTracks[] = history.state.topTracks;


  ngOnInit(): void {
    this.http.getStats('artists').subscribe((value) => {
      this.topArtists = value;
    });
    this.http.getStats('tracks').subscribe(value => {
      this.topTracks = value;
      const artistNames = []

      this.topTracks.map(track => {
        track.artists.map(artist => {
          artistNames.push(artist.name)
        });
      });

      this.topArtists.map(topArtist => {
        topArtist.ranking = 1;
        artistNames.map(artist => {
          if (artist == topArtist.name) {
            topArtist.ranking += 1;
          }
        });
      });

    })
  }
}
