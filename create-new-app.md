# Creating a React App for Github Pages

Instructions on how to create from scratch and deploy a React application to Github Pages. I used React, Javascript and yarn as the package manager.

## Step by Step Guide

1. Inside the terminal:

```
yarn create react-app "project-name"
cd project-name
git init
```

2. Open Github. Create a new, completely empty github repository. Get the ssh/http clone url link.

3. Inside your terminal, push to your remote github repo.

```
git commit -m "first commit"
git remote add origin <github-url>
git push -u origin master
```

4. Install Github Pages and other useful packages.

```
yarn add gh-pages --save-dev
yarn add react-router-dom --save
```

5. On github, find or choose the name of the website you will be deploying to, in Settings > Pages.
   It will look similar to ""https://chelffey.github.io/about-chelffey/".

6. Inside the `package.json`, add or amend the following lines:

```
"private": false,
"license": "UNLICENSED",
"homepage": "<url of your deployed website>",
...
scripts {
    ...
    "predeploy" : "yarn run build",
    "deploy" : "gh-pages -d build",
}
```

> I would also delete the 'eject' script.

6. Inside `index.js`, add the import and replace the `root.render` line with the following:

```
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
```

7. Commit and Deploy your webapp.

```
# push updates to master
git add .
git commit -m "setup deployment github pages"
git push

# deploy to github pages
yarn run deploy
```

8. Check your github settings > pages. If it is not already deploying, make sure to set `branch = gh-pages` and save. Wait a minute or two, and your page should be deployed!

### Install Eslint and Prettier

Download the vscode extensions, `Prettier - Code Formatter` and `Eslint` if they are not already there.

1. Follow most of these instructions to [configure Eslint](https://www.geeksforgeeks.org/how-to-configure-eslint-for-react-projects/)

2. Follow most of these instructions to [configure Prettier](https://khalilstemmler.com/blogs/tooling/prettier/#:~:text=Configuring%20Prettier%20to%20work%20with%20ESLint&text=With%20ESLint%20and%20Prettier%20already,these%20two%20packages%20as%20well.&text=eslint%2Dconfig%2Dprettier%20%3A%20Turns,Prettier%20rules%20into%20ESLint%20rules.)

### Add Routing

If you wish to have multiple pages on your website, you will need to set up routing.

I suggest watching the first 6 minutes of [this video](https://www.youtube.com/watch?v=Ul3y1LXxzdU&ab_channel=WebDevSimplified) for an up-to-date react-router-dom v6 explanation of routing.

> Make sure not to follow any instructions that involve `<Switch>` - this is from v5 and is outdated.

## Development

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

`yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn predeploy`

Builds the app for production.

`yarn deploy`

Deploys app to github pages.

## Debugging

If you get a blank page on deployment but not locally, then try more of these solutions: https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github

If you get a blank page locally, check your inspect. In my case I had to navigate to "/about-chelffey" instead of "/" to see the page.

## References:

- Basic Tutorial but with npm https://blog.logrocket.com/deploying-react-apps-github-pages/
- Official explanation for important `package.json` settings like `homepage` https://create-react-app.dev/docs/deployment/
- Discussion on how to route localhost and github pages together https://stackoverflow.com/questions/43011207/using-homepage-in-package-json-without-messing-up-paths-for-localhost

## Further Steps:

- Update your title and icon inside `index.html` and your manifest inside `manifest.json` (https://hackthestuff.com/article/what-is-manifest-json-file-and-how-it-is-useful)
- this one might also be worth checking out for [eslint and prettier](https://medium.com/how-to-react/config-eslint-and-prettier-in-visual-studio-code-for-react-js-development-97bb2236b31a#:~:text=Open%20the%20terminal%20in%20your,Code%20formatter%20and%20install%20it.)
