import { Component, OnInit } from '@angular/core';
import { TopTracks } from 'src/app/models/topTracks';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTrackDetailComponent } from './dialog-track-detail/dialog-track-detail.component';



@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {

  topTracks: TopTracks[] = history.state.topTracks

  constructor(public dialog: MatDialog, private http: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    this.http.getStats('tracks').subscribe(value => this.topTracks = value);
  }

  openDialog(track) {
    this.dialog.open(DialogTrackDetailComponent, {
      width: '50vh',
      height: 'fit-content',
      data: {
        track
      }
    });
  }

  formatArtistName(track, artist, artists, lastItem) {
    let artistsString = '';
    if (artists.length >= 2) {
      return lastItem ? artistsString = artistsString.concat(artist.name) : artistsString.concat(artist.name + ',');
    } else { artistsString = artist.name; }
    return artistsString;
  }

  handleSpotifyNavigate(track) {
    window.location.href = track.uri;
  }


}
