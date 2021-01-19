# spotify-age-MERN

## Intro
A Spotify API and MERN based web-app that analyzes the average musical age of a user based on their favorite songs and gives appropriate recommendations. Includes OAuth implementation in a express.js server.

## Setup
In your backend you **need** to set the following env variables:
* CLIENT_ID
* CLIENT_SECRET

Where you would put your Spotify-API credentials, of course.

The following env variables can also be set to your liking but are entirely optional:

* PORT (def: 5000)
* FRONTEND_URI (def: *http://localhost:3000*)

## Running

Running the web-app is as easy as moving to the main directory and then:

```
npm start
````
And then on another terminal:
````
cd backend
node server
````

Done! Just go to your frontend url (port 3000 by default) and you are all set.

## Screencaps

![Home Page](https://imgur.com/1wBrdO7.png)
![Fetch Page - Age](https://imgur.com/e0yofSj.png)
![Fetch Page - Recommendations](https://imgur.com/kVTjyYZ.png)
