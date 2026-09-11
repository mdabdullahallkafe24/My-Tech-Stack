
DevStack - Interactive Tech Stack Builder

A simple web app for developers to explore technologies, compare options, and build their ideal stack.


Tech Stack

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON Data


Key Features

1. Tech Selection: Pick and remove tools across different categories to form your stack.
2. Instant Alerts: Get toast notifications when items are added, removed, or duplicated.
3. Mobile Ready: Responsive design featuring a custom mobile drawer navigation.


React Q&A

1. What is JSX, and why is it used in React?
JSX is a syntax extension that lets us write HTML-like markup inside JavaScript. It makes writing and understanding React UI components much easier than using raw JS functions.


2. What is the difference between props and state?
Props: Read-only data passed from a parent component to a child. The child cannot change props.
State: Internal data managed inside a component. When state changes, React re-renders the component to reflect updates.


3. What does the useState hook do, and where did you use it in this project?
useState creates a reactive state variable to hold dynamic values. 
- Used in App.tsx to store tech data, selected stack items, loading state, and error handling.
- Used in Navbar.tsx to toggle the mobile menu (isOpen).


4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect handles side effects like fetching data or DOM manipulation. Fetching local JSON data is an asynchronous task, so useEffect runs once when the component mounts to load technologies.json.


5. Why does every item in a .map() list need a unique key prop?
The key prop helps React identify which items changed, were added, or removed. It optimizes performance by updating only specific elements instead of re-rendering the whole list.


6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing UI elements based on specific conditions or state.

Example in StackSidebar.tsx:
myStack.length === 0 ? <p>No items added yet.</p> : myStack.map((tech) => ...)

Shows an empty state message when the stack is empty, otherwise renders the list.


7. How do you pass data from parent to child, and child back to parent?
Parent to Child: Data is passed down directly using Props (example: <TechCard item={item} />).
Child to Parent: The parent passes a callback function via props, which the child calls to send data back (example: passing handleAddToStack as onAdd prop to <TechCard />).