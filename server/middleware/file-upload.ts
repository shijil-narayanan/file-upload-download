

import * as  multer from 'multer';

export const fileUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb( null, new Date().toISOString() + '-' + file.originalname);
    }
  });
  return multer({storage}).array('files');
};
