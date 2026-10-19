# About React

>## What is React?
>- A JavaScript library for creating dynamic and intereactive UIs
>- Created at Facebook in 2011 and currently the most widely used tsx library for frontend develpment.
>
>## Why React?
>Browsers take html code of loaded webpages and creates a tree-like structure called the __Document Object Model__ (DOM). This is allows for modifying page contents >with javascript in response to users' actions. For instance, we can hide an element when a button is clicked. This type of javascript is known as __Vanilla >JavaScript__, (ie. plain JavaScript code; no 3rd-party code) 
>
>```tsx
>// Vanilla tsx
>const btn = document.querySelector('#btn');
>btn.addEventListener('click', () => {
>    const div = document.querySelector('#div');
>    div.style.display = 'none';
>});
>```
>However, this can become quite complex and challenging to manage as the application grows and this is where React comes into play. React removes the need of querying >and updating DOM elements. Instead, webpages are described using a smalll resusable **components** and React will efficiently handle the management of these DOM >elements.
>
><div style="     
>    width: fit-content;
>    max-width: 90%;
>    margin: 2rem auto;
>    padding: 1.4rem 2.2rem;
>    border: 1px solid #3b82f6;
>    border-radius: 16px;
>    background: #111827;
>    color: f9fafb;
>    text-align: center;
>    font-family: 'JetBrains Mono', monospace;
>    font-size: 1.4rem;
>    font-style: italics;
>    font-weight: 600;
>    line-height: 1.6;
>">
>    Components help us write<br>
>    <span style="color: 60a5fa;">
>        resuable, modular, and better
>    </span><br>
>    organized code
></div>
>
>## Setting Up the Development Environment
>- Check the Node version on your machine by running in your terminal: 
>```powershell
>node -v
># v24.18.0
>```
>- You need node version 16 and higher
>
># React Ecosystem
>
>## Library vs Framework
>Apart from React, there are other tools like Angular and Vue which are frameworks;
>
><div style="text-align: center">
>    <figure >
>        <figcaption style="
>        text-align: left;
>        margin-bottom: 0.4rem;
>        margin-left: 290px;
>        font-size: 14px;
>        font-style: italic;
>        border-radius: 12px;
>        color: gray;
>        ">
>            React, Angular and Vue
>        </figcaption>
>        <img style="border-radius: 12px;"
>            height="300px"; 
>            width="700"; 
>            src="react_angular_vue.png"
>            alt="#" 
>        />
>    </figure>
>    <p></p>
>     <figcaption style="
>        text-align: left;
>        margin-bottom: 0.4rem;
>        margin-left: 335px;
>        font-size: 14px;
>        font-style: italic;
>        color: gray;
>        ">
>            Library vs Framework
>        </figcaption>
>    <img 
>        style="border-radius: 12px;"
>        height="300px"; 
>        width="700"; 
>        src="library_vs_framework.png"></img>
>        <br>
></div>
><br>
>
>
>React is only used for and good at creating dynamic and interactive user interfaces. So, additional tools are needed for some functionalities such as:
>
>- **Routing**: Alowing users to transit between webpages.
>- **Making HTTP calls**
>- **Managing app state**
>- **Internationalization**
>- **Form validation**
>- **Animations**.







