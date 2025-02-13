# PASS

## PASS Project - React Documentation

This repository branch contains a ported version of the PASS project using React.js. Currently, this build can:

1. Log into a user's Pod
2. Upload files through a form and store them in the user's Pod
3. Update one's file on a user's Pod through a form
4. Query for specific document from user's Pod if file exist (i.e. .ttl file exist for specific document type)
5. Delete specific document from user's Pod if file exist (i.e. .ttl file exist for specific document type)
6. Set/Revoke permission for other user's Pod to see specific document in your Pod
7. Search other user's Pod for specific document if permission is given by other user
8. Add/Remove user to user list
9. Ability to select user from use list as deisgnated pod for cross pod requests
10. Nav bar to navigate between home and forms
11. Logout the user

While features for cross pod querying/searching has been implemented, cross pod writing/uploading has yet to be implemented. At this time, cross pod writing/uploading is shown simply as a placeholder at this time.

## State of Build/Tech Stack

The current build is made with React 18 for the front-end and bundled using Vite. The solid-ui-react library has been incorporated to the application along with Solid's other client libraries (see CONTRIBUTING.md for links to solid react and client library documentation). Several node scripts has been setup for ease of development, namely for linting, formatting, and generating JSDoc documentation for the React version of the application.

To generate the full React development documentation of the application locally, the following command can be ran:

```shell
npm run docs
```

This will create the documentation within /docs via JSDoc. The documentation could easily be accessed locally by running:

```shell
npx serve docs
```

A local live server link to the documentation will be prepared at:

```shell
http://localhost:3000/
```

To clear the documentation from /docs, you can simply run the following command:

```shell
npm run docs:clear
```

This will clear all, but /docs/README.md from your branch.

Linting and formatting for this project has also been setup using ESlint and Prettier. To lint your changes with ESLint, you can run:

```shell
npm run lint
```

To fix these errors, you can run:

```shell
npm run lint:fix
```

You can check the formatting of the existing code using Prettier by running:

```shell
npm run prettier:check
```

This will enable Prettier to check if existing code follows existing formatting rules for this project. To format the project with existing Prettier settings, simply run:

```shell
npm run prettier:run
```

## How to get this running locally

To get a running version of this branch, clone from this branch into a directory and run the following within the directory containing the package.json:

```shell
npm install
```

After installing the dependencies from package.json, run the following to start a local live server to view the application:

```shell
npm run dev
```

The local live server would be located in port 5173 and with the following URL:

```shell
http://localhost:5173/PASS/
```

Latest version of this build require users to login to their Pod through [https://opencommons.net](https://opencommons.net)
