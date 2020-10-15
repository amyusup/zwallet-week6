const multer = require("multer");
const path = require("path");

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./Public/Images");
  },
  filename: (req, file, callback) => {
    const NewFileName = `${Date.now()}-${file.originalname}`;
    callback(null, NewFileName);
  },
});

const upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, callback) => {
    const fileTypes = /jpg|jpeg|png|svg|gif|webp/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return callback(null, true);
    } else {
      return callback("Only images are allowed", false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 8,
  },
}).any("photo");

module.exports = upload;
