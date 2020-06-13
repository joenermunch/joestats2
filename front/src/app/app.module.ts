import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { ParticlesModule } from 'ngx-particle';
import { DialogTrackDetailComponent } from './components/top-tracks/dialog-track-detail/dialog-track-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent,
    TopTracksComponent,
    TopArtistsComponent,
    DialogTrackDetailComponent
  ],
  imports: [
    ParticlesModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
