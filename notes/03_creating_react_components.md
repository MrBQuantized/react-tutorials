# Creating a React Component

> There are two ways of creating a React component: 
> - JavaScript function 
> - Class Component
> 
> We would be using class JavaScript function because of it's conciseness.
> 
> ## Using JavaScript Function.
> In using JavaScript Functions, there are some important terms we need to understand.
> - **PascalCasing**: In declaring a function, we use. This convention requires that we capitalize the first letter of every word.
> ```tsx
> function Message() { // PascalCasing
>     // JSX: JavaScript XML
>     return <h1>Hello World</h1>;
> } 
> 
> // export the function
> export default Message;
> ```
> - **JavaScript XML (JSX)**: This is JavaScript syntax that is similar to HTML or XML.
> -  **Self-Closing Syntax**: You can also use the self-closing syntax `<tag />` to make your JSX more concise:
> ```tsx
> // Intead of 
> <div><Message></Message> </div> 
> 
> //Write
> <div><Message /> </div> 
> ```
> - **Default Exports/Imports**: Before you can make use of a component/ function, you must first export as a default export and > then, import it in the script where you want to use it.
> In real world applications, your javascript code should be able to implement some dynamic functionality as shown below:
> 
> ```tsx
> import { Message } from "./App"
> function App() {
>     const name = "Blessing";
>   if (name)
>     return <h1>Hello {name}</h1>; // Dynamic content
>   return <h1>Hello World</h1>;
> };
> 
> // Export the App Component as well
> export default App;
> ```
> We can see how react convert these codes to javascript in [Babel](http://www.babeljs.io/repl)