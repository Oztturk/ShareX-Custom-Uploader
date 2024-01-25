import * as fs from 'fs';
import * as path from 'path';
import { WebhookClient } from 'discord.js';
import {IsAcceptedFileType} from "./public";
const webhookURL = process.env.WEBHOOK as string || "";
const webhookClient = webhookURL ? new WebhookClient({ url: webhookURL }) : null;

function uploadtodiscord(filePath: string): void {
    if (webhookClient) {
        const filename = path.basename(filePath);
        if (IsAcceptedFileType(filename)) {
            const fileStream = fs.createReadStream(filePath);
            webhookClient.send({
                username: `Oztturk's uploader`,
                files: [{
                    attachment: fileStream,
                    name: filename
                }]
            });
        }
    }
}

export { uploadtodiscord };
