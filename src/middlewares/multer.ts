import multer from "multer";
import path from "path";
import funcs from "../functions/public";
import fs from "fs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: function (req, file, cb) {
        const filename = `${req.body.PREFIX || process.env.PREFIX}${funcs.RandomString(7)}_${Date.now()}`;
        const fileExtension = path.extname(file.originalname);
        cb(null, filename + fileExtension);
    }
});

export default multer({ storage: storage })