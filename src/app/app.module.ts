import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { BytesToSizePipe } from './pipes/bytes-to-size.pipe';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from  '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadDialogComponent,
    BytesToSizePipe,
    UploadedFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UploadDialogComponent]
})
export class AppModule {
}
