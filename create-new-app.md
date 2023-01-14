# Creating a React App for Github Pages

Some notes on how to create from scratch and deploy a React application to Github Pages. I used React, Javascript and yarn as the package manager. 

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
yarn add eslint-config-react -D
yarn add react-router-dom --save
```


5. On github, find or choose the name of the website you will be deploying to, in Settings > Pages. 
It will look similar to ""https://chelffey.github.io/about-chelffey/". 


5. Inside the `package.json`, add or amend the following lines:

```
"private": false,
"license": "UNLICENSED",
"homepage": "<name of your deployed website>",
...
scripts {
    ...
    "predeploy" : "yarn run build",
    "deploy" : "gh-pages -d build",
}
```
> I would also remove the 'eject' script. 


6. Commit and Deploy your webapp.
```
# push updates to master
git add .
git commit -m "setup deployment github pages"
git push

# deploy to github pages
yarn run deploy
```

7. Check your github settings > pages. If it is not already deploying, make sure to set `branch = gh-pages` and save. Wait a minute or two, and your page should be deployed! 

## Debugging

If you get a blank page on deployment but not locally, then try more of these solutions: https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github

If you get a blank page locally, check your inspect. In my case I had to navigate to "/about-chelffey" instead of "/" to see the page. 

## References:
- Basic Tutorial but with npm https://blog.logrocket.com/deploying-react-apps-github-pages/
- Solving router problems https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819

## Further Steps:
- Update your title and icon inside `index.html` and your manifest inside `manifest.json` (https://hackthestuff.com/article/what-is-manifest-json-file-and-how-it-is-useful)