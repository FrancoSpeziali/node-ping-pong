# Node.js PING PONG

![Cats playing ping pong!](https://media.giphy.com/media/fvA1ieS8rEV8Y/source.gif)

This is a simple and fun assignment designed to show you how the relationship between the backend and the frontend.

## Getting started

Please run `npm install` before starting

## What you will be doing

For this application, we will be building the frontend and the backend side by side.

This project expects that you have knowledge on the following:

- JavaScript
- Frontend
- Fetch API
- Tools for testing APIs, such as Postman or Insomnia
- Handling GET requests with Express.js

## Assignments

For the backend part of this assignment, you are expected to write your code in the file `server.js`

For the frontend part of this assignment, you are expected to write your code in a separate project.

## Assignment 1 - GET with Express.js

Research: [app.get() method](http://expressjs.com/en/4x/api.html#app.get.method)

Research: [response.status()](http://expressjs.com/en/4x/api.html#res.status)

Research: [response.send()](http://expressjs.com/en/4x/api.html#res.send)

1. Make an `app.get()` function call to listen for a GET request. Set the path to `'/ping'`

2. Set the response status to the code `200`

3. For now, send a response within your `app.get()` method with the string `'pong'`

## Assignment 2 - Test!

Let's perform a simple test to see if we can connect to our server.

1. In the `console`, run the command:
    `nodemon server.js` or `node server.js`
    
    > Hint: The difference between `nodemon` and `node` is that `nodemon` will automatically reload / reserve your file when you make changes. `node` will not.

2. Once your server is running, you can connect to it with one of your API testing tools (Postman, Insomnia)

    Use this URL `http://localhost:3001/ping` to connect to the server

3. What is the response?

## Assignment 3 - Let's add some realism

In a real game, your opponent might make a mistake and miss the "hit". Let's simulate this by wrapping a `setTimeout` function around the response.

Research: [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Research: [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

1. Create a `setTimeout` function and wrap it around your response.

2. Use `Math.random()` to choose a random time for your `setTimeout` function between `0` and `5000` milliseconds

3. If the random time chosen is above `2000`, respond with the code `500`, otherwise respond with the code `200`

## Assignment 4 - Test it again!

Let's perform another test to see if our server works.

1. In the `console`, run the command:
    `nodemon server.js` or `node server.js`

2. Once your server is running, you can connect to it with one of your API testing tools (Postman, Insomnia)

    Use this URL `http://localhost:3001/ping` to connect to the server

3. Try sending the request multiple times. If the response received is less than 2000 milliseconds, the response should be successful (200). If it is longer than that, the response should be unsuccessful (500).

## Assignment 5 - Build a frontend to play the game

Build a frontend (in either vanilla javascript or with React, for example with create-react-app) which will make the `GET` request you were previously testing with your API testing tool.

1. The frontend should include:

    - A `<button>` with the text "PING" for sending the request 
    - When you click on the button, it should send a "PING" using `fetch` to request `http://localhost:3001/ping`
    - A count showing how many ping / pong requests were successful
    
    > Hint: You may remember, you will need to add an event listener for the click event. With React you can achieve this with the `onClick` attribute.
     
2. The `<button>` should be `disabled` while the `fetch` request is being performed. When you receive the response, you can remove the disabled attribute.

> Hint: This is very easy to do with React. Simply use a state variable for the disabled status.

3. Show the total count of successful ping / pong requests. Reset the counter once the "pong" response fails.

![Howzat!](https://media.giphy.com/media/sxCKezAUq8yn6/source.gif)

## Assignment 6 (optional) - Let the player lose!

Of course in this game, you can never lose!

In a real game, you would also be keeping track of how long it takes the user to "respond" to the pong.

- You will need to hold another variable 

- You may want to use timestamps for this `new Date().getTime()`. This will give you an integer. 

- Keep track of the time between a successful "pong" response and the time it takes the user to click the button

- You will need a timestamp for the "pong" response and a timestamp for the user "click"

- If the difference between the 2 timestamps is too great, then the player will lose 

- You could also randomise the position of the button each time to make the game harder