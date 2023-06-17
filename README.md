# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Exercise7
Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18.

Exercise8
Modify the Welcome component so that the Age component is rendered only if the age prop is present.

Exercise9
Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65.

Exercise9
Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John".

Exercise11
Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.

Exercise12
Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;

Exercise13
Modify the Counter component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.

Exercise14
Extract the h1 tag showing the count state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.

Exercise15
Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required?

Exercise16
Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.

Exercise17
Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.

Exercise18
Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.


Exercise19
Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.

Exercise20
Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

Exercise21
Implement an UncontrolledLogin component that implements all the operations of the Login component, but does so using uncontrolled components.

Exercise22
Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.

Exercise23
Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array.

Exercise24
Modify the TodoList component so that the input clears every time a Todo is added to the items array.

Exercise25
Modify the TodoList by adding a "reset" button that clears the items array when clicked.

Exercise26
Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array.

Exercise27
Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array

Exercsise28
Create a LanguageContext and wrap a DisplayLanguage component within its provider. Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.

Exercise29
Consume the LanguageContext within the DisplayLanguage component by using the context consumer, and show the selected language in an h1 tag.

Exercise30
Rewrite the ClickCounter component as a function component, and use the useState hook to track the state of the counte

Exercise31
Rewrite the Login component as a function component, and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.

Exercise32
Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop. L'esercizio si trova nella cartella exercise30


Exercise33 
Rewrite the Counter component as a function component and add a side effect that initializes the interval as soon as the component renders, and clears it when the component unmounts.


Exercise34
Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}


Exercise35
Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button.

Exercise36
Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.(L'esercizio lo trovi nella cartella exercise30 ,file exercise30)


Exercise37
Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.
(A Differenza dell'esercizio prima, qui il custom hook l'ho creato completamente a parte invece che crearlo sopra , per poi esportalo , il custom hook si trova nella cartella 37, mentre il login cambiato nella cartella 31.)


Exercise38
Extract the logic to fetch a Github user's data from the GithubUser component into a custom hook called useGithubUser.
(Il custom hook si trova alla cartella numero 38 mentre nella cartella 34 ci sta il componente)


Exercise39
Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states. (sempre cartella 38 per il custom hook e cartella 34 per esercizio )

Exercise40
Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.

Exercise41
Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.

Exercise42
Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback to memoize the functions used to increment, decrement and reset the counter.

Exercise43
Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

Exercise44
Add a new Route to the /counter path that renders the Counter component,


Exercise45
Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component by passing it the received username.

Exercise46
Add three Links within the main App component and use them to navigate to all three routes (tutto svolto in app).

Exercise47
Add a Not Found route that renders when a user navigates to a path that does not exist (anche questo si trova in app)

Exercise48
Add a Route to the users path that shows the GihubUserList component. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.

Exercise49
Add an index route to the GithubUserList route that shows the "Add a user and select it" message.