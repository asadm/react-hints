import React from 'react';

// Your component being loaded. Can be used below
import Hint from '../src';

export default class Example extends React.Component {
  render() {
    return (
      <Hint
        id="hint-1"
        message="You can put the hint at any side of the element."
      >
        <div className="container1">
          test
        </div>
      </Hint>
    );
  }
}
