# Notes App

A client-side app using JavaScript and Jest for testing. It allows a user to manage a list of their 'to-do' notes.

It shows how JavaScript code:
* is built and loaded by a web browser
* can manipulate the page content and handle user interaction
* can make HTTP requests without reloading the page (using fetch)

The app has been built using a  minimal code structure for separation of concerns.

![Screenshot](https://i.imgur.com/lH6Kq8m.png?1)

## Video Demo
Visit https://i.imgur.com/nYwtX5n.mp4

## How to use locally
Clone the repo to your local machine, change into the directory, then:
```
$ npm install -g esbuild
$ npm install
$ npm run build
```
Keep the build task running in the background. In the terminal, open a new tab in the same directory, then:

To use the app in your browser:
```
$ open index.html
```

To run the tests:
```
$ jest
```

## Technologies used
* CSS
* HTML
* Jest
* JavaScript
