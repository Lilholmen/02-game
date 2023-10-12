# [Card Game](https://lilholmen.github.io/02-game/)

This project was created durning the course **React-academy** by **CDG** in 2023.

text

App available online via the header link

## Game rules

- Click on card to see its backface;
- Click on another card and if they are the same, they marked as guessed;
- If they are different they fip back in 1 second, so user need to remeber them;
- After all card pairs will be found, game shows modal window with a result of the level;
- User can chose what to do next: restsrt level, start next level(in not last), just close the window;
- Durning the game stage user also have access to the restart and choose level functions from header section;
- Timer in the middle starts then the first card will be flipped and stops then the level completed;
- If user restarted or changed current level timer will be reseted and stopped.

## Not realized features:

In case of deadline some features which were not provided for by the task, but were invented by me, may be implemented in the future:

- Saving best score to local storage;
- Dark mode, for playing in night;
- Organizing board according to display (for now card row is always contain 4 cards);
- Themes for cards backface.

## Available Scripts

In the project directory, you can run:

### `npm deploy`

Runs standart react build script then build to github pages and push in gh-pages branch;\
Thereafter app can be accessed online via the link: [The card game online](https://lilholmen.github.io/02-game/).

Path can be changed in `package.json`, _Homepage_ property.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
