#HOW TO RUN THIS PROJECT#
(Prerequisitive: npm, brew)
1. Unzip diary-app folder in any drictory 

A. Backend setup
1. From Terminal, go to diary-app/server folder
2. Run "npm init -y"
3. Run "npm install express body-parser cors mongoose nodemon" to install required component
4. Run "npx nodemon index.js" to start server

B. MongoDB setup
1. install MongoDB
2. Run "brew services start mongodb" to start DB
(If required, create db folder under server folder)

C. Client setup
1. From Terminal, go to diary-app/client folder
2. Run "npm install"
3. Run "npm start"

#TECHNOLOGY USED#
-JavaScript
-React
-MongoDB
-npm
-git

#ABOUT THIS PROJECT#
User can enter diary text contents as well as the value that represent the day.
Then, user can see the diary entries in chart view.

#HIGHLIGHT OF THE PROJECT#
All four CRUN operations are implemented.
User can see diary values in chart view.

#PLAN FOR IMPROVEMENT#
Chart should be accountable for the date where no diary has been entered.


#CRUD operation#
Create: POST /api/diary (createDiary)
Update: PUT /api/diary/:id (updateDiary)
Delete: DELETE /api/diaary/:id (deleteDiary)
Read: GET /api/diary/:id (getDiaryById)
Read: GET /api/diaries (getDiaries)






This project was bootstrapped with [Create React app](https://github.com/facebook/create-react-app).

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React app documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web app

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
