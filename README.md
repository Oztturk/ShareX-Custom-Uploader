# 🔥 ShareX Custom Uploader

This project was developed using TypeScript. The purpose of the project is to allow you to store the screenshots and videos you capture in ShareX on your server and send them to discord.

## Getting Started

First, clone the project:

```bash
  git clone https://github.com/username/project.git
```

Installation
To run the project, TypeScript must be installed. If TypeScript is not installed on your computer, follow these steps:

Check if TypeScript is installed:

```bash
  tsc --version
```

If TypeScript is not installed, install it using the following command:
```bash
  npm install -g typescript
```

Building the Project
To compile the project files, use the following command:
```bash
  npm run build
```
This command will compile TypeScript files to JavaScript. Once the compilation is successfully completed, you can find the compiled files in the dist folder.

You can customize the .env

![image](https://github.com/Oztturk/ShareX-Custom-Uploader/assets/128193690/75db4daf-b037-4259-b655-f7137e07599b)

leave WEBHOOK blank if you don't want your captured images to be transferred to discord

and start the project
```bash
  npm run dev
```

#ShareX Settings

![image](https://github.com/Oztturk/ShareX-Custom-Uploader/assets/128193690/207879b6-2e92-47ec-9932-fe55c760f1bc)


![image](https://github.com/Oztturk/ShareX-Custom-Uploader/assets/128193690/1cebf3e5-45b3-4b97-bb3f-79c85b1daf48)

Request url will be the url of your server

body part

secret Must be the same as the secret in .env

PREFIX: change as you like

file from name: "oztturk" you can change this by examining the code.
