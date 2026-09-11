
# DevStack - Interactive Tech Stack Builder
A simple web app for developers to explore technologies, compare options, and build their ideal stack.

## Tech Stack
- React.js
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON Data

    React Q&A: 
    
1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.


2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only.

State is data managed inside a component. When state changes, React updates the UI.


3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component.

I used it in App.tsx to manage technology data, selected stack items, loading, and error states. I also used it in Navbar.tsx to control the mobile menu.


4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component.

I used it in App.tsx to fetch the technologies.json file when the component loads.


5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It helps React understand which item has changed, been added, or removed.


6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in StackSidebar.tsx:

myStack.length === 0
  ? <p>No items added yet.</p>
  : myStack.map((tech) => ...)

When the stack is empty, it shows the empty message. Otherwise, it shows the selected technologies.


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

For example:
<TechCard 
item={item} 
onAdd={handleAddToStack} 
/>


Here, item and onAdd are passed from the parent to the child.

The child can call the onAdd function to send information back to the parent when the user clicks the Add to Stack button.
