import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {UploadDialogComponent} from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<any>;

  onFileSelect(event): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = event.target.files;
    this.dialogRef = this.dialog.open(UploadDialogComponent, dialogConfig);
  }

}
