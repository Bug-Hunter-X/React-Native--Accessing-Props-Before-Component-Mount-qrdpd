This error occurs when you try to access a component's state or props before it has been mounted.  This commonly happens within lifecycle methods like `constructor` or `componentDidMount` before `this.state` or `this.props` are properly populated.

```javascript
// Incorrect:
constructor(props) {
  super(props);
  console.log(this.props.someProp); // Error: Cannot read properties of undefined (reading 'someProp')
}

// Correct:
constructor(props) {
  super(props);
}

componentDidMount() {
  console.log(this.props.someProp); // Access props after mount
}
```