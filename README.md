# File Upload and Download

This is a basic file upload and download app built using Angular 9 as frontend and NodeJs as backend and MongoDB as the database.

## Getting Started


### Prerequisites

You need to have latest version of Node installed in your machine.Node version 12 is recommended.

Another must is a MongoDB database URL.

### Installing


Once the project is cloned in your system,execute the following command in the terminal.

```
npm install
```

The above command will install all the required node modules to run the app.Once all the node modules are installed,traverse to `constants.ts` file placed under constants folder inside server directory.Replace the `dbUrl` url value by your MongoDb URL.Execute 


```
npm run start
```

This will set up a dev server for client side of our application.

Note: Running `ng serve` wont execute our proxy logic mentioned in `package.json`, hence ensure to run `npm run start` every time for compilation.

Open another terminal window and execute the following command to spin up our node server

```
npm run server
```


Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Built With

* [Angular 9](https://angular.io/) 
* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)


## Authors

* **Shijil Narayanan** - *Initial work* - [shijil-narayanan](https://github.com/shijil-narayanan)


## Acknowledgments

* [bezcoder](https://bezkoder.com/)
