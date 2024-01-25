import { Router } from "express";
import multer from "../middlewares/multer";
import { uploadtodiscord } from './../functions/webhook';
import * as path from 'path';

const Route = Router();

Route.post("/", multer.single("oztturk"), (req, res) => {
    if (req.body.secret === process.env.SECRET) {
        if (req.file) {
            res.send(req.protocol + '://' + req.get('host') + '/' + "uploads/" + req.file.filename);
            const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
            uploadtodiscord(filePath);
        } else {
            res.status(400).send('File upload failed');
        }
    } else {
        res.status(401).send('Invalid Secret Key');
    }
})

export default Route;

