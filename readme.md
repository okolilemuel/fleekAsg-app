# Fleek Asg App

This is the Frontend part - [Fleek Asg](https://github.com/okolilemuel/fleekAsg) which takes a `source path` and `destination path` at run time. It encrypts any file placed in the source path and stores it in the destination path. The encryption key for this particular session will be logged to the terminal. The app exposes http endpoints to query the encrypted files and download the decrypted version.

## Usage

Follow the steps below to run the app

- Clone this repository
- Start the API server here `https://github.com/okolilemuel/fleekAsg`
- Open the terminal or command line in the base directory of the project
- Run the application using `npm run start`
- Go to `http://localhost:3000` in a browser to use the App

## Dependencies

- [axios](https://www.npmjs.com/package/axios) 

## Built with

- https://expressjs.com/
- https://handlebarsjs.com/
- https://jestjs.io/