const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination:  (req, file, cb)  => {
    cb(null, `${__dirname}`)

  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

exports.upload = multer({ storage: storage });

