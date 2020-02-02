# Memory Game

https://md0808.github.io/react-click/

Click on a plant. Try to remember each one you've picked. You lose the round when you pick the same plant twice. You get a point for each time you click a unique card.

## Technologies Used:

- React.js
- Create-React-App
- Bootstrap
- CSS
- Animate.css
- HTML
- Node.js
- npm

<img width="1417" alt="Screen Shot 2020-01-26 at 8 01 28 PM" src="https://user-images.githubusercontent.com/51139840/73148187-90598980-4080-11ea-9148-0cb5fb6b14d0.png">

## Problem

The application should render different images to the screen. Each image should listen for click events, keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game should restart.

## Solution

Using the React.js library, this application is composed of four components: Container, Gameboard, Scoreboard, and Card. The Container componenent is the highest level, holds the state object, and hands props to Gameboard and Scoreboard. Gameboard hands props to Card. Each plant's photo, name and id are drilled to the the the Card Component and rendered within the Gameboard.
Every time a user clicks a plant, onClick event handler is triggered in the Card component, which is executed in the Container. Inside the handler function, the state is updated to reflect the changes after each click. The application checks to see if the image has already been clicked. If it has, the current score is reset, signaling a new game. If it has not been clicked, the scoreboard is updated, and the game continues. Another function is called to re-shuffle the images that appear using the Durstenfeld Shuffle.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
