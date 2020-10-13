# Node / Express.js PING PONG

![Cats playing ping pong!](https://media.giphy.com/media/fvA1ieS8rEV8Y/source.gif)

We are going to write a "ping / pong" style game.

- Player 1 will send the "ping". This will be you.
- Player 2 will send the "pong". This will be the server.

#### How the game works:

The server will keep count of the time between the "ping" and "pong" requests. If the time difference is too big, the player who took too long to respond will automatically lose.  

#### Examples:

In the following examples, we set the maximum time to respond to 1000ms

##### Example 1:

> Player 1 sends a "ping" @time 2000
> Player 2 sends a "pong" @time 2100 > difference 100ms (ok)
> Player 1 sends a "ping" @time 2500 > difference 400ms (ok)
> Player 2 sends a "pong" @time 3500 > difference 1000ms (bad)
>
> Player 2 loses

##### Example 2:

> Player 1 sends a "ping" @time 2000
> Player 2 sends a "pong" @time 3100 > difference 1100ms (bad)
>
> Player 1 loses

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

For the backend part of this assignment, you are expected to write your code in the file `server-solution.js`

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
    `nodemon server-solution.js` or `node server-solution.js`
    
    > Hint: The difference between `nodemon` and `node` is that `nodemon` will automatically reload / reserve your file when you make changes. `node` will not.

2. Once your server is running, you can connect to it with one of your API testing tools (Postman, Insomnia)

    Use this URL `http://localhost:3001/ping` to connect to the server

3. What is the response?

## Assignment 3 - Setting up our variables

1. Create a global variable called `maximumTime` with a value of `1000`. This will be the maximum time allowed between responses. Since we will not re-assign this value, it can be a `const`.

2. Create another global variable called `lastRequestTimestamp` to store the time value of the last request. We will use JavaScript to create a timestamp (more on this later). Since we will re-assign this value, we can use a `let` here. For now, set this value to `null`.

    > Note: This variable will be either of type `null` or `number` 

## Assignment 4 - Game rules

A game is no fun without rules, so let's add some game rules.

##### Rule 1: New game

The first rule we must establish is whether we have started a new game, or if we are currently playing a game.

We can determine this by looking at the variable `lastRequestTimestamp` we created in **Assignment 3**. If this variable is `null`, we are starting a new game. If it is a `number`, we are currently in a game.

- We need to know the time of the incoming request from the client to the server (the "ping").

- We must generate a timestamp and store it temporarily in a variable called `newRequestTimestamp` - `new Date().getTime().toString()`. This code will generate a timestamp, which is the current time stored in milliseconds (as a number). It will look something like this: `1602579226027`.

- if this is a new game, we set this to `lastRequestTimestamp`, and send a `200` response back to the client, with the message "new game"

##### Rule 2: Existing game

If this an existing game:

The next rule we must establish is whether the time between the requests is too great.

We check if the difference between `lastRequestTimestamp` and `newRequestTimestamp` is greater than our threshold stored in `maximumTime`:

- if the difference is too great:
    - Player 1 loses - we send a `400` error (client error) with the message "you lose"
    - We set `lastRequestTimestamp` to `null`

- if the difference is ok:
    - We send a `200` response with the message "pong!"
    - We set `lastRequestTimestamp` to `newRequestTimestamp`
    
## Assignment 5 - Test your game

Let's perform another test to see if our game works.

1. In the `console`, run the command:
    `nodemon server-solution.js` or `node server-solution.js`

2. Once your server is running, you can connect to it with one of your API testing tools (Postman, Insomnia)

    Use this URL `http://localhost:3001/ping` to connect to the server

3. Try sending the request multiple times. If the response received is less than 1000 milliseconds, the response should be successful (200). If it is longer than that, the response should be unsuccessful (400).

> Note: If it does not work, examine your logic and retry **Assignments 3-4**

## Assignment 6 - Let's add some realism

In a real game, your opponent might make a mistake and miss the "hit". Let's simulate this by adding a random variable into the equation.

Research: [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Research: [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

1. Use `Math.random()` to choose a random time for server response (Player 2 "pong")

2. The number should be in between `0` and `2000`

3. If the random value is above `maximumTime`, the server will lose and respond with ` 500` (server) error. The value `lastRequestTimestamp` should be set to `null`.

4. For added realism, you can wrap the responses with `setTimeout` to simulate the delay

## Assignment 7 - Test it again!

Test your game again to make sure it works

## Assignment 8 - Build a frontend to play the game

Build a frontend (in either vanilla javascript or with React, for example with create-react-app) which will make the `GET` request you were previously testing with your API testing tool.

1. The frontend should include:

    - A `<button>` with the text "PING" for sending the request 
    - When you click on the button, it should send a "PING" using `fetch` to request `http://localhost:3001/ping`
    - OPTIONAL: You could also randomise the position of the button each time to make the game harder
    
    > Hint: You may remember, you will need to add an event listener for the click event. With React you can achieve this with the `onClick` attribute.
     
2. The `<button>` should be `disabled` while the `fetch` request is being performed. When you receive the response, you can remove the disabled attribute.

> Hint: This is very easy to do with React. Simply use a state variable for the disabled status.

3. Show the total count of successful ping / pong requests. Reset the counter once the "pong" response fails, and display the name of the winner

![Howzat!](https://media.giphy.com/media/sxCKezAUq8yn6/source.gif)
