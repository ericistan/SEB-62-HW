INTRODUCTION
This is to work as a checklist to follow so that everything is accounted for. We will create a simple React application that connects to a backend server. We will set up the project structure, install necessary packages, and create a basic React app that can fetch data from the server and display it.

TABLE OF CONTENTS
PACKAGE.JSON SETUP
MAIN.JSX
APP.JSX
INDEX.HTML
OTHER PACKAGES (OPTIONAL)

- TANSTACK QUERY
- REACT ROUTER

1.  PACKAGE.JSON SETUP
    A. INSTALL PACKAGE DEPENDENCIES
    npm i react react-dom react-error-boundary react-router
    note: all these are from the starter-code given, hence you should check if there is any updates or additional setup required. (will add these information at later part)
    note: you may add more later as needed but these are the basics to get you started.

    Hence at packages.json, you should see these dependencies listed under "dependencies":

    ```json
    "dependencies": {
        "react": "^19.1.1",
        "react-dom": "^19.1.1",
        "react-error-boundary": "^6.0.0"
    },
    ```

    B. INSTALL DEV DEPENDENCIES
    npm i -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite
    note: all these are from the starter-code given, hence you should check if there is any updates or additional setup required.
    note: you may add more later as needed but these are the basics to get you started.

    Hence at packages.json, you should see these dependencies listed under "dependencies":

    ```json
    "devDependencies": {
        "@eslint/js": "^9.36.0",
        "@types/react": "^19.1.16",
        "@types/react-dom": "^19.1.9",
        "@vitejs/plugin-react": "^5.0.4",
        "eslint": "^9.36.0",
        "eslint-plugin-react-hooks": "^5.2.0",
        "eslint-plugin-react-refresh": "^0.4.22",
        "globals": "^16.4.0",
        "vite": "^7.1.7"
     }
    ```

    C. OTHER PACKAGE SETUP
    At the top level of the package.json, you should also see these fields. Ensure that the "type" is set to "module" to enable ES module support in your project. ??? And also under "scripts", the commands for "dev", "build", "lint", and "preview" should be defined as follows.
    Note this is also from the starter-code given, hence you should check the reason why these are setup in this way.

    ```json
    "name": "someNameReact",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
    },
    ```

2.  MAIN.JSX
    Given the starter-code, the main.jsx given looks like this:

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import "./index.css";
    import { ErrorBoundary } from "react-error-boundary";
    import ErrorComponent from "./ErrorComponent";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
    );
    ```

    A. IMPORT REACT AND REACT-DOM
    At the top of your main.jsx file, you should import React and ReactDOM as follows:

    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";
    ```

    B. IMPORT APP COMPONENT
    You should also import your main App component that will serve as the root of your application. Assuming you have an App.jsx file in the same directory, you can import it like this:

    ```javascript
    import App from "./App.jsx";
    ```

    C. RENDER THE APP COMPONENT
    Finally, you need to render the App component into the DOM. You can do this using ReactDOM.createRoot and calling the render method as follows:

    ```javascript
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    ```

    D. ERROR BOUNDARY
    To handle any potential errors in your React application gracefully, you can use the ErrorBoundary component from the react-error-boundary package. You should wrap your App component with the ErrorBoundary and provide a fallback component to display in case of an error. Assuming you have an ErrorComponent.jsx file that serves as the fallback UI, you can set it up as follows.

    ```
     import { ErrorBoundary } from "react-error-boundary";
     import ErrorComponent from "./ErrorComponent.jsx";
     ...
     ...
     ...
     <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
      ...
      ...
      ...
    ```

    Note that for fallback or fallbackcomponent, you can either write it within the same file or create a component (e.g. ErrorComponent.jsx) and import it to be used.

    ```jsx
    import React from "react";
    ```

    const ErrorComponent = (props) => {
    console.error("Error Encountered", props.error);

        return (
            <div>

                <h1>Error encountered</h1>
                <br />
                Error message: {props.error.message}
            </div>
        );

    };

    export default ErrorComponent;

    ```

    ```

3.  APP.JSX
    The App.jsx file is where you will define the main structure of your React application. You can start with a simple functional component that returns some JSX to render on the page. For example:

    ```jsx
    import React from "react";

    const App = () => {
      return (
        <div>
          <h1>Welcome to My React App</h1>
          <p>This is a simple React application.</p>
        </div>
      );
    };

    export default App;
    ```

    This is just a basic setup to get you started. You can expand this component by adding more functionality, such as fetching data from an API, handling user interactions, and managing state as needed for your application.

4.  INDEX.HTML
    The index.html file is the entry point for your React application. It should contain a div with an id of "root" where your React components will be rendered. A basic index.html file might look like this:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My React App</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
    ```

    In this file, we have a div with the id "root" where our React application will be mounted. We also include a script tag that points to our main.jsx file, which is the entry point for our React code.

5.  OTHER PACKAGES (OPTIONAL)
    A. TANSTACK QUERY
    If you want to manage server state and data fetching in your React application, you can consider using TanStack Query (formerly known as React Query). It provides powerful tools for fetching, caching, and updating data in your React applications. You can install it using npm:

    ```
    npm install @tanstack/react-query
    ```

    At App.jsx, you can set up the QueryClient and QueryClientProvider to enable TanStack Query in your application. For example:

    ```jsx
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

    const queryClient = new QueryClient();

    const App = () => {
      return (
        <QueryClientProvider client={queryClient}>
          {/* Your application components */}
        </QueryClientProvider>
      );
    };

    export default App;
    ```

    B. REACT ROUTER
    If you want to add routing capabilities to your React application, you can use React Router. It allows you to create single-page applications with navigation between different components without refreshing the page. You can install it using npm:

    ```
    npm install react-router
    ```

    At main.jsx, import BrowserRouter from react-router and wrap your App component with it to enable routing in your application. For example:

    ```jsx
    import { BrowserRouter } from "react-router";
    import { ErrorBoundary } from "react-error-boundary";
    import ErrorComponent from "../ErrorComponent";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorComponent}>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </React.StrictMode>,
    );
    ```

    Then at App.jsx, wrap your components with Routes and use Route to define the different routes in your application. (Remember to import Routes and Route from "react-router") For example:

    ```jsx
    import { Routes, Route } from "react-router";

    const App = () => {
      return (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      );
    };

    export default App;
    ```

    After installing these packages, you can import and use them in your App.jsx or other components as needed to enhance the functionality of your React application.

6.  CREATE SRC FOLDER AND FILES
    In the src folder root level, create the following files:
    - App.jsx
    - main.jsx
    - ErrorComponent.jsx (only if you are using ErrorBoundary, otherwise you can skip this file)
    - index.css (optional, for styling purposes)

    A. COMPONENTS FOLDER
    Create Component.jsx file. Use shortcut keys "rsc" + Enter to create a React functional component template. This is where you can create reusable components for your application as shown below:

    ```jsx
    import React from "react";

    const someComponent = () => {
      return <div></div>;
    };

    export default someComponent;
    ```
