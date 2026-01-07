import multer from "multer";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./imgUploads");
	},
	filename: (req, file, cb) => {
		cb(null, `Image-${Date.now()}-${file.originalname}`);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png"
	) {
		cb(null, true);
	} else {
		cb(new Error("Only jpg, jpeg, png allowed"), false);
	}
};

const upload = multer({ storage, fileFilter });

export default upload;
