# govtech2023technical

Small repo for GovTech 2023 technical assessment to make URL shortener.

## URL Shorterner
```
URL shortening is a web technique in which a Uniform Resource Location (URL) can have a substantial reduction in length, 
providing a new unique URL that still directs to the specified web page. 
The general idea is to reduce long web addresses into a shorter format that is easier to remember, track, share in messages or use in print work.
```

## Requirements

The simply idea for this assessment is to have a simple input box for users to put in their URL, and the site will have to output the shortened URL.

The tech used here is react and nodeJS backend, however a database should be used to ensure persistence. 
NoSQL(MongoDB) database would be a good option, since relations are not a concern.\

### Limitations 

No security / validation.\
Collision in shortened links because I am only using 5 characters.\
Could be faster with caching.\
Website not uploaded into public domain.

### MongoDB & `npm start`

Run MongoDB locally on localhost:27017, then run:

```
cd frontend
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).