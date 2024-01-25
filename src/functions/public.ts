import * as path from 'path';

export const log = (str: string, UseDate?: boolean): void => {
    if (UseDate) {
        const date = new Date();

        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${str}`);
        return;
    }
    console.log(str);
};

export const RandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

export const IsAcceptedFileType = (filename: string): boolean => {
    const imagesaccepted = ['.png', '.jpg','.gif'];
    const videoaccepted = ['.mp4'];
    const uzanti = path.extname(filename).toLowerCase();
    return imagesaccepted.includes(uzanti) || videoaccepted.includes(uzanti);
}

export default { log,RandomString,IsAcceptedFileType }