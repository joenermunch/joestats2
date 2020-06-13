export interface TopTracks {
  album: {name: string, images: [{url: string}], id: string};
  artists: [{name: string, id: string}];
  id: string;
  name: string;
  uri: string;
  artistsString: string;
}