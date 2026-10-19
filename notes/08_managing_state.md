# Managing State

>In managing states with react, there's a built-in function that gives us access to built-in features called **Hook**. We import the **useState** function which will >allow us, tell react that our components can have time-variant states (changing over time).
>
>```tsx
>import { useState } from "react";
>
>function ListGroup() {
>    let items = ["New York", "San Francisco", "Aba", "Port Harcourt", "Enugu"];
>
>  // Hook
>  const [selectedIndex, setSelectedIndex] = useState(-1);
>
>  return (
>    <>
>      <h1>List</h1>
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
>
>export default ListGroup;
>
>}
>```
>
>**Note** _Each component has its own state_