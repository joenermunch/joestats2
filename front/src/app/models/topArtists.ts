export interface TopArtists {
  id: string;
  name: string;
  uri: string;
  images: [{ url: string }];
  ranking: number;
}