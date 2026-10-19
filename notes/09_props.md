# Props / Properties

>## Passing Data via Props
>
>Now we want to try a list of series resusable. This is where we make use of props/ properties. Props are the inputs to our >components.
>
>Instead of defining items as items of a variable (array), we can define them as inputs to our components just like you can call  >function and give it arguments. This principle also applies to the the elements in JSX.
>
>We decide the shape of the input of the components:
>```
>    { items: [], heading: string }
>```
>This can be done using a tsx feature called  **Interface**
>
>So we make the following changes in the Component and update `Apps.tsx` as well
>```tsx
>//ListGroup.tsx
>interface Props
>// You can prefix with the name of the component
>// either way works.
>interface ListGroupProps {
>    items: string[],    // Type annotation
>    heading: string
>}
>
>function ListGroup({ items, heading }: Props) {
>    const [selectedIndex, setSelectedIndex] = useState(-1);
>
>  return (
>    <>
>      <h1>{heading}</h1>
>      {items.length === 0 && <p>No items found</p>}
>      <ul className="list-group">
>        {items.map((item, index) => (
>          <li
>            className={
>              selectedIndex === index
>                ? "list-group-item active"
>                : "list-group-item"
>            }
>            key={item}
>            onClick={() => setSelectedIndex(index) }
>          >
>            {item}
>          </li>
>        ))}
>      </ul>
>    </>
>  );
>}
>```
>Observe the parameters of the component/function **ListGroup** we used object destructuring to assign properties **items**, >**heading** so that we can access them anywhere in the function.
>
>```tsx
>// App.tsx
>import ListGroup from "./components/ListGroup"; 
>
>function App() {
>  let items = ["New York", "San Francisco", "Aba", "Port Harcourt", "Enugu"];
>
>  return <div>
>    <ListGroup items={items} heading="Cities"/>
>    </div>
>};
>
>// Export the App Component as well
>export default App;
>
>```
>
>## Passing Functions via Props
>
>In real-world applications, something should happen after an item is selected. This varies by applications. We don't to >implement this piece of logic inside our ListGroup component.
>
>We include a function as a new Property in the interface
>```tsx
>interface Props {
>  items: string[];
>  heading: string;
>  onSelectItem: (item: string) => void;  // Function prop added
>}
>
>function ListGroup({ items, heading, onSelectItem }: Props) {
>    const [selectedIndex, setSelectedIndex] = useState(-1);
>
> return (
>    <>
>      <h1>{heading}</h1>
>      {items.length === 0 && <p>No items found</p>}
>      <ul className="list-group">
>        {items.map((item, index) => (
>          <li
>            className={
>              selectedIndex === index
>                ? "list-group-item active"
>                : "list-group-item"
>            }
>            key={item}
>            onClick={() => {
>              setSelectedIndex(index);
>              onSelectItem(item); // 
>            }}
>          >
>            {item}
>          </li>
>        ))}
>      </ul>
>    </>
>  );
>}
>
>```
>
>And then, in the `App.tsx` we make the following changes:
>```tsx
>  ...
>  // Define the function outside to avoid inline logic
>  const handleSelectItem = (item: string) => {
>    console.log(item);
>  };
>  return (
>    <div>
>      <ListGroup
>        items={items}
>        heading="Cities"
>        onSelectItem={handleSelectItem}
>      />
>    </div>
>  );
>}
>```
>
>## State vs Properties
>
>We will discuss the differences and similarities between properties and state
>
><div style="text-align: center">    
>     <figure >
>        <figcaption style="
>        text-align: left;
>        margin-bottom: 0.4rem;
>        margin-left: 290px;
>        font-size: 14px;
>        font-style: italic;
>        border-radius: 12px;
>        color: gray;
>        ">
>            Props vs State
>        </figcaption>
>        <img style="border-radius: 12px;"
>            height="300px"; 
>            width="700"; 
>            src="props_vs_state.png"
>            alt="#" 
>        />
>    </figure>
></div><br>
>
>### Differences:
>- While props are inputs lpassed to a component which is similar to a function argument, a state on the other hand, is a data >managed by a component. It is similar to local variables.
>- Props are immutable (read-only) while a state is.
>
>### Simlarities
>- Both of them cause react to re-render of components according to their changes.
>
>
>## Passing children
>
>### Steps
>
>- Create an new component `Alert.tsx` and use the short command: `rafce` and pressing **tab** on the auto-complete box rendered. >This creates a React Arrow Function Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets):
>
>```tsx
>// rafce
>//   |
>//   ↓
>
>import React from 'react'
>
>const Alert = () => {
>  return (
>    <div>
>      
>    </div>
>  )
>}
>
>export default Alert
>```
>### Render Alert
>
>We render alerts using pair of div tags with two classes **alert** and **alert-primary** which tells us the class
>We use the interface to make use of the children property and set the type to **ReactNode** which is a ReactNode class defind in >the react module. This property allow us to pass contents with more complex structure than a string, (like html) dynamically to >JSX:
>
>```tsx
>// App.tsx
> return (
>    <div className="alert alert-primary">
>      <Alert>
>        Hello <span>World</span>   
>      </Alert>
>    </div>
>  );
>```
>
>```tsx
>import { ReactNode } from "react";
>
>interface Props {
>    children: ReactNode;
>}
>
>const Alert = ({ children }: Props) => {
>    return (
>        <div>
>            Alert
>        </div>
>    )
>}
>
>```
>
>```tsx
>//  App.tsx
>import Alert from "./components/Alert";
>
>function App() {
>  return (
>    <div className="alert alert-primary" role="alert">
>      <Alert>
>        Hello <span>World</span>
>      </Alert>
>    </div>
>  );
>}
>
>// Export the App Component as well
>export default App;
>
>```