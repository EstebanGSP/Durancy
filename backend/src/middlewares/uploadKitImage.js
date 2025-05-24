const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/kits'); // 🔥 c’est ici qu’on enregistre les images
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-kit' + ext); // nom unique
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Seuls les fichiers JPG, JPEG et PNG sont autorisés.'), false);
  }
};

const uploadKitImage = multer({ storage, fileFilter });

module.exports = uploadKitImage;
