import { Router } from "express";
import path from "path";
import fs from "fs";

const Route = Router();


const imagesaccepted = ['.png', '.jpg','.gif'];
const videoaccepted = ['.mp4'];

Route.get("/:id", (req,res) => {
    const imagesPath = path.join(__dirname, '..', 'uploads');
    fs.readFile(path.join(imagesPath, req.params.id), (err, data) => {
        if (err) {
            console.error('Dosya okuma hatası:', err);
            return res.status(500).send('Sunucuda bir hata oluştu');

        }
        console.log(path.extname(req.params.id))

        if (imagesaccepted.includes(path.extname(req.params.id))) 
        {
            res.setHeader('Content-Type', 'image/png');
        }else if (videoaccepted.includes(path.extname(req.params.id))) {
            res.setHeader('Content-Type', 'video/mp4');
        }
        
        res.send(data);
    });
});


export default Route