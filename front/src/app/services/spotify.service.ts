import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopTracks } from '../models/topTracks';
import { filter, map, tap } from 'rxjs/operators'
import { TopArtists } from '../models/topArtists';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getSpotify(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    return this.http.get('/api/auth/spotify');
  }

  refreshSpotify(): Observable<any> {

    return this.http.get('/api/auth/spotify/refresh');
  }

  getStats(method): Observable<any> {

    if (method === 'tracks') {
      return this.http.get('/api/auth/spotify/toptracks').pipe(
        map(value => value as TopTracks[])
      )
    }

    if (method === 'artists') {
      return this.http.get('/api/auth/spotify/topartists').pipe(map(value => value as TopArtists[]));
    }


  }

  getCookies(): Observable<any> {
    return this.http.get('/api/auth/spotify/cookies');
  }
}
