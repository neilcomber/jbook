## Code Sandbox App

This is a standalone code sandbox app that allows you to write, test and document your Javascript & React code, built in Typescript with React 16.

I built it to have somewhere to quickly test small snippets of code, where i can also save my documentation locally. I built it primatily to become more familiar with Typescript & React 16. I was also eager to use ES build to work with a bundler built in go, and figuring out how integrating with web assembly would go

### Some Technologies Used

- Built primarily with React 16 & Redux. Also React-Resize to add resizing capabilities to the code & preview windows.
  
- Transpiles & Bundles users code using ES Build, executing & displaying in an iframe preview window.

- The code editor is powered by the Monaco open source code editor.

- uses react-md-editor to add markdown capability to the documentation window.

- uses Immer to help with redux's immutable logic.

- uses Lerna to create a small CLI to run startup commands.

- uses bulma swatch css library to do most of the CSS

### Things To improve moving forward:

- The Sandbox can currently only import 1 css file for user code execution, in the future i would like it to take multiple files
- The bundler does not perform checks the user isn't creating infinite loops, it would be nice to add some logic to check this pre-compiling.
- users cannot currently use cookies with their code
- users cannot currently access local storage with their code

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

