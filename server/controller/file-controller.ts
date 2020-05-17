
import { Request, Response } from 'express';
import File from '../model/file-model';
import { ObjectID } from 'mongodb';
import * as path from 'path';
import * as fs from 'fs';

export class FileController {

  getFiles(req: Request, res: Response){

    const query = req.query;

    File.find(query, (err: any, files: any) => {
      if (err) {
        res.status(500).send(err);
      }
      const newFiles = files.map(file => file.toJSON());
      res.send(newFiles);
    });
  }

  deleteFile(req: Request, res: Response){
    const query = { _id: new ObjectID( req.params.fileId)};

    File.collection.findOne(query, (err, file) => {
      // deleting file from uploads folder
      const filePath = path.join(__dirname, '../../uploads/') + file.filename;

      fs.unlink(filePath, () => {

          // deleting file from database
          File.collection.deleteOne(query, (error, deleteResponse) => {
            if (error) {
              res.status(500).send(error);
            }
            res.status(200).send(deleteResponse);
          });

      });

     });
  }


  uploadFiles(req: any, res: Response) {

    const uploadedFiles = [];

    // Loop over files received from request body and save file in db one at a time
    req.files.forEach(file => {


      const {originalname, size, mimetype, path: fileUrl, filename} = file;
      const data = new File({originalname, size, mimetype, url: fileUrl, filename});

      data.save((err, uploadedFile) => {
        if (err) {
          res.status(500).json({  message: 'File(s) upload failed'});
        } else {

          uploadedFiles.push(uploadedFile);
          if (uploadedFiles.length === req.files.length) {
            res.status(201).json({ files: uploadedFiles, message: 'File(s) uploaded successfully'});
          }
        }
      });

    });

  }

  downLoadFile(req: Request, res: Response) {
    const filePath = path.join(__dirname, '../../uploads/') + req.body.filename;
    res.download(filePath);
  }

}
