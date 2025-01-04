# React Native: Accessing Props Before Component Mount

This repository demonstrates a common error in React Native development: attempting to access component props or state before the component has fully mounted. This often leads to `Cannot read properties of undefined` errors.

## Bug Description
The `bug.js` file shows incorrect code that tries to access props within the `constructor`, leading to an error.  The correct approach is shown in `bugSolution.js`, where prop access is delayed until `componentDidMount`. 

## Solution
Always access component state and props within lifecycle methods such as `componentDidMount` or `componentDidUpdate` to ensure that they are properly initialized.