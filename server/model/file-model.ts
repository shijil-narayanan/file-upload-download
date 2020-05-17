

import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const fileSchema = new Schema({
  originalname: {
    type: String,
  },
  filename: {
    type: String,
  },
  mimetype: {
    type: String,
  },
  size: {
    type: Number,
  },
  url: {
    type: String
  }
});

export default mongoose.model('File', fileSchema);
