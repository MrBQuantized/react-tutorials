
>## Rendering markup with JSX
>
>### Rendering Lists
>
>In real-world application you would want to render the list items dynamically instead of hard-coding them. In JSX, we can't make >use of  loops to distribute items, but we can use a different technique.
>
>With the use of `map()` and **arrow** functions, we can map each item to a list item and replace the entire markup code with a single code wrapped in curly braces (this is because JSX does not support arrow_functions written like that):
>```tsx 
>    <ul className="list-group">
>        {items.map(item => <li>{item}</li>)} 
>    </ul>
>```
>**NOTE**: _Each child in a list should have a unique "key" prop._
>```tsx 
>    <ul className="list-group">
>        {items.map((item) => (
>            </ul>
>        <li key={item}>{item}</li>))}     
>```
>_We will implement this later_.
>
>
>## Conditional Rendering
>
>
>There are several methods for conditional rendering
>1. Using if statement:
>```tsx
>function ListGroup() {
>  let items = ["New York", "San Francisco", "Aba", "Port Harcourt", "Enugu"];
>
>  items = [];
>
>  // Conditional rendering
>  if (items.length === 0)
>    return (
>      <>
>        <h1>List</h1>     Duplicate
>            <p>No item found</p>
>      </>
>    );
>
>  return (
>      <>
>      <h1>List</h1>     Duplicate
>      <ul className="list-group">
>        {items.map((item) => (
>          <li>{item}</li>
>        ))}
>      </ul>
>    </>
>  );
>};
>```
>But this leaves us with duplicates (i.e. header elements) nad this is not a good practice.
>
>2. String Inerpolation and ternary operator:
>
>```tsx
>
>
>  return (
>      <>
>      <h1>List</h1>    
>      {items.length === 0? <p>No item found</p> : null}
>      <ul className="list-group">
>        {items.map((item) => (
>          <li key={item}>{item}</li>
>        ))}
>      </ul>
>    </>
>  );
>```
>3. String interpolation with a constant
>```tsx
>
>  const message = items.length === 0? <p>No item found</p> : null;
>
>  return (
>      <>
>      <h1>List</h1>    
>      {message}
>      <ul className="list-group">
>        {items.map((item) => (
>          <li key={item}>{item}</li>
>        ))}
>      </ul>
>    </>
>  );
>  
>```
>4. String interpolation with a function with benefit of having parameters. Use a constant if you do not have such a scenario.
>```tsx
>  // Declaration
>  const getMessage = () => {
>  
>  items.length === 0? <p>No item found</p> : null;
>  }
>  
>  // Calling the function
>  return (
>      <>
>      <h1>List</h1>   
>      {getMessage()}            
>      <ul className="list-group">
>        {items.map((item) => (
>          <li key={item}>{item}</li>
>        ))}
>      </ul>
>    </>
>  );
>
>```
>5. Interpolation with a more concise logical AND (&&) condition:
>```tsx
>  return (
>      <>
>      <h1>List</h1>   
>      {items.length === 0 && <p>No items found</p>}            
>      <ul className="list-group">
>        {items.map((item) => (
>          <li key={item}>{item}</li>
>        ))}
>      </ul>
>    </>
>  );
>```
>This follows from the logic: 
>```tsx
>true && 1
>// => 1
>true && 'Blessing'
>// => 'Blessing'
>
>// But:
>false && 'Blessing'
>// => false
>```
>This returns the paragraph component, if the condition is `true` and and nothing if `false`. There's no need to add `null` as >separate result.
>
>## Handling Events
>
>### Click Events
>
>Let's remove the empty array variable. We forgot to apply one of the bootstrap classes to the items `className`;
>
>In React each element has a property called **onClick**. We will include this property in the list item element, `<li>` and >arrow function to activate it on click.
>
>```tsx
>  return (
>      <>
>      <h1>List</h1>   
>      {items.length === 0 && <p>No items found</p>}            
>      <ul className="list-group">
>        {items.map((item) => (
>          <li className="list-group-item" key={item} onClick={ () => console.log("Click")}>{item}</li>
>        ))}
>      </ul>
>    </>
>  );
>```
>Instead of just logging **Click**, we can log the items and their indexes:
>
>```tsx
>  return (
>      <>
>      <h1>List</h1>   
>      {items.length === 0 && <p>No items found</p>}            
>      <ul className="list-group">
>        {items.map((item) => (
>          <li className="list-group-item" key={item, index} onClick={ () => console.log("Click")}>{item, index}</li>
>        ))}
>      </ul>
>    </>
>  );
>
>```
>
>We can handle events by declaring a click handler function using arrow functions and type annotation. We import MouseEvent from >react and use to infer the type of the parameter in teh function:
>
>```tsx
>import { type MouseEvent } from 'react';
>
>  // Event handler
>  const handleClick = (event: MouseEvent) => console.log(event);
>
>  // Conditional rendering
>  return (
>    <>
>      <h1>List</h1>
>      {items.length === 0 && <p>No items found</p>}
>      <ul className="list-group">
>        {items.map((item, index) => (
>          <li
>            className="list-group-item"
>            key={item}
>            onClick={handleClick}
>          >
>            {item}
>          </li>
>        ))}
>      </ul>
>    </>
>  );
>}
>```

