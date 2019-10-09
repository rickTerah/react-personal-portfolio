# react-personal-portfolio

> ### React personal portfolio (simple react and Node JS project). Used to showcase Your profile, skills, Projects and contact. It uses Node JS  for backend to provide skills in different categories like Front-end, Back-end and databases. It is also used to provide different projects.

## Getting started

You can view a live demo over at https://react-redux.realworld.io/

To get the frontend running locally:

- Clone this repo `https://github.com/Terahpatrick/react-personal-portfolio.git`.
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use port 3000. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.
 
Alternatively, you can add `.env` file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details. Also, please remove setting variable via script section of `package.json` - `dotenv` never override variables if they are already set.  

### Making requests to the backend API

For convenience, I created a node js back which contains all routes & responses for the server.

The source code for the backend server (available for Node) can be found in the [Back-end Repo](https://github.com/Terahpatrick/node-personal-portfolio.git ).

If you want to change the API URL to a local server, it will run to the local server's URL (i.e. `http://localhost:2500/api`)


## Functionality overview

The example application is portfolio called "Terah". It uses a custom API for all requests.

**General functionality:**

- CRU* Projects
- CRUD Skills, 

**The general page breakdown looks like this:**

- Home page (URL: / )
    - Personal profile

- Skills page (URL: /skills )
    - Skills eg. Back-end, Front-end

- Project page (URL: /projects )
    - Projects 

- Contact page (URL: /contact )
    - Form to contacting me.

