# Building Components

>## Scope
>- Building components
>- Rendering markup with JSX
>- Managing state
>- Passing input via properties
>- Debugging React apps
>
>
>## Creating a ListGroup Component
>- Install Bootstrap - a CSS library with many classes for styling out application;
>```powershell
>npm i bootstrap
>
># Or
>npm install bootstrap
>
>```
>- Remove all the default contents of the [App.tsx](/src/App.tsx), [App.css](/src/App.css), [index.tsx](/src/index.tsx).
>- Update main.tsx by imoprting bootstrap:
>```tsx
>import 'bootstrap/dist/css/bootstrap.css'
>```
>- Create a new file using the PascalCasing syntax: `/src/components/ListGroup.tsx` 
>- Create the function `ListGroup()` and export it as default component and import in `App.tsx` file.
>```tsx
>//ListGroup.tsx
>function ListGroup() {
>    return <h1>List Group</h1>;
>
>}
>export default ListGroup;
>
>//App.tsx
>import ListGroup from "./components/ListGroup";
>
>function App() {
>    return <div><App /></div>
>}
>
>export default App;
>```
>### Borrowing Markup Code from Bootstrap
>- We can confirm that our code is working fine the browser. 
>- Next we borrow some code from [Get started with Bootstrap](http://www.getbootstrap.com). 
>- Navigate to **Docs** tab and on the left side, move to **Components**>**List group** and copy some markup code and paste it in >your `ListGroup.tsx` file. 😜.
>
>### Formatting Markup code using Prettier
>- Change the `class`(a reserved keyword in JS/TS) keyword to `className` to avoid errors.
>- To make the code properly formatted we need to select a default formatter **Prettier**. 
>- On vscode, type Ctrl + Shift + P and select/type "Format Document". A **Configure Default Formatter** dialogue window will pop >up telling us that there are multiple formatters for Typescript. Press **Configure** and choose **Prettier**.
>- Prettier automatically wraps the markup code in parenthesis which necessary to break the markup into multiple lines.
>
>```tsx
>function ListGroup() {
>  return ( ←—— // Prettier formatting
>    <ul className="list-group">
>      <li className="list-group-item">An item</li>
>      <li className="list-group-item">A second item</li>
>      <li className="list-group-item">A third item</li>
>      <li className="list-group-item">A fourth item</li>
>      <li className="list-group-item">And a fifth one</li>
>    </ul>
>  );   ←—— // Prettier formatting
>}
>
>export default ListGroup;
>```
>### Fragments
>In React, a component cannot contain more than one elements (e.x. h1 and li). This can be resolved by:
>1. Wrapping all the codes in div tags. Use the short cut on vscode:
>```
>Ctrl + Shift + P > Wrap with Abbreviation > div
>```
>2. Using Fragments (Best option): `div` tags add one extra element in the DOM which is unnecessary. We can insteaad, import >**Fragment** and replace the div tags with it.
>
>```tsx
>
>import { Fragment } from 'react';
>
>    <Fragment>
>        <ul className="list-group">
>            <li className="list-group-item">An item</li>
>            <li className="list-group-item">A second item</li>
>            <li className="list-group-item">A third item</li>
>            <li className="list-group-item">A fourth item</li>
>            <li className="list-group-item">And a fifth one</li>
>        </ul>
>    </Fragment>
>```
>
>We can also use empty angle brackets `<></>` instead of importing Fragment. 
>```tsx
>    <>
>        <ul className="list-group">
>            <li className="list-group-item">An item</li>
>            <li className="list-group-item">A second item</li>
>            <li className="list-group-item">A third item</li>
>            <li className="list-group-item">A fourth item</li>
>            <li className="list-group-item">And a fifth one</li>
>        </ul>
>    </>
>
>```
>
>## Rendering markup with JSX
>### Rendering Lists
>
>In real-world application you would want to render the list items dynamically instead of hard-coding them. In JSX, we can't make >use of  loops to distribute items. so, we have to use a different technique.
>
>This is where the `map()` and **arrow** functions come into play.
>We map each item to render as a list item and replace the entire markup code with this single code wrapped in curly braces (this >because JSX does not support arrow_functions written like that):
>```tsx 
>    <ul className="list-group">
>        {items.map(item => <li>{item}</li>)} 
>    </ul>
>```
>**NOTE**: _Each child in a list should have a unique "key" prop. We will implement this later__.
>
>
>## Conditional Rendering