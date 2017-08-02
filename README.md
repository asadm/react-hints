# React Hints

This is a simple component to show floating hints highlighting product features.

[**Online Demo**](https://asadmemon.com/react-hints/)

### Installation

In your React project folder run:

```sh
npm install react-hints --save
```

### Usage

1. Import `react-hints` into your component.

   ```jsx
   import Hint from 'react-hints';
   ```

2. In your render, wrap some element with the `<Hint />` component. Here is a `<button />` wrapped:

   ```jsx
   <Hint
     id="hint-1"
     message="You can put the hint at any side of the element."
     position="top">
       <button className="btn btn-lg btn-default">
         Action!
       </button>
   </Hint>
   ```

3. Read more about what each prop means [here](https://asadmemon.com/react-hints/).

## License

*react-hints* is available under MIT. See LICENSE for more details.

