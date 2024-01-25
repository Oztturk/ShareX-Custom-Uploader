import express from "express";
import 'dotenv/config';

import {log,RandomString} from "./functions/public";
import post from "./routes/post";
import uploads from "./routes/uploads";
const app = express();

app.use("/post",post);
app.use("/uploads",uploads);

app.listen(process.env.PORT || 3030, () => {
    log(`Server started on port ${process.env.PORT}`,true);
})