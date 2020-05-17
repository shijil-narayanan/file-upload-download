

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Application} from 'express';
import {FileManagerRoute} from './routes/file-manager-route';
import * as MongoClient from 'mongoose';
import {dbUrl} from './constants/constants';

class App {

  app: Application;
  private fileManagerRoute: FileManagerRoute = new FileManagerRoute();

  constructor(){
    this.app = express();
    this.addAppConfigs();
    this.connectToDatabase();

    this.app.use('/api', this.fileManagerRoute.routes());

  }

  private addAppConfigs(): void{
    this.app.use('/uploads', express.static('uploads'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private connectToDatabase(){
    MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
      .then(() => console.log('MongoDB connected...'))
      .catch(err => console.log(err));
  }

}

export default new App().app;
