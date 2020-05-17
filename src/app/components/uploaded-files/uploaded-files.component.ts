import { Component, OnInit } from '@angular/core';
import {FileStore} from '../../services/file-store.service';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {IFile} from '../../models/model';

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.css']
})
export class UploadedFilesComponent implements OnInit {

  constructor(private fileStore: FileStore) { }

  files$: Observable<IFile[]> = this.fileStore.getFiles();

  ngOnInit() {
    this.fileStore.loadFiles();
  }

  downLoadFile(file: IFile): void {
    this.fileStore.downloadFile(file);
  }

  deleteFile(fileId: string): void{
    this.fileStore.deleteFile(fileId)
      .pipe(take(1))
      .subscribe(console.log);
  }

}
