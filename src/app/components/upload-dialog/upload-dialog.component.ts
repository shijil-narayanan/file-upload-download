import {Component, Inject, OnDestroy} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpEventType} from '@angular/common/http';
import {FileStore} from '../../services/file-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnDestroy{

  selectedFiles: File[];
  uploadProgress: number;
  uploadFilesSub: Subscription;

  constructor(private fileStore: FileStore,
              private dialogRef: MatDialogRef<UploadDialogComponent>,
              @Inject(MAT_DIALOG_DATA) files: File[]) {

              this.selectedFiles = Array.from(files);
  }

  uploadFiles(): void {
    this.uploadProgress = 0;
    this.uploadFilesSub = this.fileStore.uploadFiles(this.selectedFiles).subscribe(
        evt => this.handleUploadFileSuccess(evt),
        err => console.log(err)
     );
  }

  deleteFile(index: number): void{
    this.selectedFiles.splice(index, 1);
    if (this.selectedFiles.length === 0){
      this.close();
    }
  }

  close(): void{
    this.dialogRef.close();
  }

  private handleUploadFileSuccess(evt): void{
    switch (evt.type) {
      case HttpEventType.UploadProgress:
        this.uploadProgress  = Math.round(evt.loaded / evt.total * 100);
        break;
       case HttpEventType.Response: {
          this.uploadProgress = 100;
          setTimeout(() => this.close(), 1800);
       }
    }
  }

  ngOnDestroy(){
     if (this.uploadFilesSub) {
      this.uploadFilesSub.unsubscribe();
    }
  }
}
