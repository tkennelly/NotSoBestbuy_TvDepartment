# NotSoBestbuy_TvDepartment

# Not-So-Best-Buy

![Hackathon](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.usdigitalpartners.com%2Fwp-content%2Fuploads%2Fhackathon.gif&f=1&nofb=1)

## Overview

In this group project, you will have 2 days to create a **Mock E Commerce** Full Stack Application. This will include a **Frontend with DOM Manipulation**, a **MongoDB database**, and a **Mongoose/Express backend**. How you distribute the work within your group will be up to you. By the end of the hackathon, you will be expected to have a _working_  and _reasonably styled_ app. 


Your website should allow users to interact with its pages, make _requests_ (buttons, HTML forms, dropdowns, searchbars, etc.) to your backend, and *display the data* (text, images, etc.) in a meaningful way. Try to think about building an application that will create an engaging user experience.

You will be building this app in **ONE** github repo which your group will be sharing. 

Your group will be assigned a department to base your shop around, you will have to decide how you want to shape your data and what you want your models to contain. 

Have fun!

## Instructions

- Choose a team git boss to handle pull requests from team members
- Build your own API with:
  - A MongoDB database connected to mongoose
  - Mongoose schemas and models
  - Server Middleware
  - Routes and Controllers
- Build a Frontend with HTML, CSS, and JS within a `client` directory _inside_ the main project directory:

  ```sh
  touch index.html style.css script.js
  ```


- Style your App professionally
- Connect them with `axios` in the App. Your server's base URL should look something like this in development http://localhost:3001/api/
  ```js
  const BASE_URL = 'http://localhost:3001/'
  // When using the BASE_URL
  axios.get(`${BASE_URL}/someroute`)
  ```

## Requirements

- At least 2 routes on your back end with both Index and Show end points
- Get (Read) functionality through Axios
- At least 2 different forms of user interactivity to pull and render information from your backend to your front end
- 4 CRUD routes attached to one model on back end
- At least 1 addition CUD functionality (Create, Update, Delete) attached to 1 model on Front End
- Minimum of 5 Git Commits from each group member
- Connected Mongoose/Express backend
- Working frontend
- Reasonably styled

---

### **FINAL PRODUCT DUE: Thursday, June 8th at 11:00am EST (complete or not)**

---



The folder structure should look like this:

```
.
├── client
│   ├── index.html
│   ├── style.css
│   └── script.js
├── controllers
|   ├── Controller1.js
|   └── Controller2.js
├── db
|   └── index.js
├── models
|   ├── Model1.js
|   ├── Model2.js
|   └── index.js
├── package.json
└── server.js
```
