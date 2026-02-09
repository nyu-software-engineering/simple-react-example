# Simple React.js Example

A live version of this app is available at [https://nyu-software-engineering.github.io/simple-react-example/](https://nyu-software-engineering.github.io/simple-react-example/)

This simple React example shows:

- Components (a.k.a functions that return modular, reusable parts of the interface)
- `JSX` (a.k.a HTML-like syntax for creating interface elements)
- Event handlers (a.k.a functions you can run when the user clicks something, types something, or submits a form)
- Props (a.k.a. arguments to components)
- State variables
- Side-Effects (a.k.a. functions that can be run whenever a component first loads or anytime a State variable changes its value.)
- Using `axios` to make requests to servers.

## Install dependencies

Install and configure the dependencies listed in the `package.json` file using `npm`, Node.js's built-in package manager:

`npm install`

## Start the React development server

This command launches React's in-memory web server that serves up the pages. It includes "hot reloading", meaning that if you modify the code files, the server updates accordingly, so you don't have to stop and restart the server manually with every change. Note that modification of some files, such as `.env` settings files, do not trigger the hot reload.

`npm run dev`

## Build the production-ready files for hosting on a real web server

When ready to publish a completed site, you will want React to generate the completed HTML, CSS, Javascript and other asset files in a way that a standard web server can host them. To do so, run ...

`npm run build`
