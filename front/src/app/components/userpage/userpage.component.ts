import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { TopTracks } from 'src/app/models/topTracks';
import { Router } from '@angular/router';
import { TopArtists } from 'src/app/models/topArtists';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {

  spotifyID: string;
  topTracks: TopTracks[] = [];
  topArtists: TopArtists[] = [];

  constructor(private http: SpotifyService, private router: Router) { }


  ngOnInit(): void {

    this.http.refreshSpotify().subscribe(() => {
      this.http.getCookies().subscribe(value => {
        this.spotifyID = value.spotifyID;
      })
    });

    this.http.getStats('tracks').subscribe((value) => {
      this.topTracks = value;
    });

    this.http.getStats('artists').subscribe((value) => {
      this.topArtists = value;
      console.log(this.topArtists);
    });

  }

  handleNavigation(method) {
    if (method === 'tracks') {
      this.router.navigateByUrl('/toptracks', { state: { spotifyID: this.spotifyID, topTracks: this.topTracks } })
    }
    if (method === 'artists') {
      this.router.navigateByUrl('/topartists', { state: { spotifyID: this.spotifyID, topArtists: this.topArtists, topTracks: this.topTracks } })
    }
  }

}
