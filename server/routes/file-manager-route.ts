
import * as express from 'express';
import {FileController} from '../controller/file-controller';
import { fileUpload} from '../middleware/file-upload';

export class FileManagerRoute {

  private fileManagerRoute = express.Router();
  private fileController = new FileController();

  constructor(){}

  public routes(){

    this.fileManagerRoute.get('/files', this.fileController.getFiles);

    this.fileManagerRoute.delete('/file/:fileId', this.fileController.deleteFile);

    this.fileManagerRoute.post('/upload', fileUpload(), this.fileController.uploadFiles);

    this.fileManagerRoute.post('/download', this.fileController.downLoadFile);

    return this.fileManagerRoute;
  }
}
