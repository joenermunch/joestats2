import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TopTracks } from 'src/app/models/topTracks';


@Component({
  selector: 'app-dialog-track-detail',
  templateUrl: './dialog-track-detail.component.html',
  styleUrls: ['./dialog-track-detail.component.scss']
})
export class DialogTrackDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogTrackDetailComponent>) { }

  track: TopTracks = this.data.track || [];

  ngOnInit(): void {
    console.log(this.data.track);
  }

  handleSpotifyNavigate(track) {
    window.location.href = track.uri;
  }


}
