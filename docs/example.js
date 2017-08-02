import React from 'react';

// Your component being loaded. Can be used below
import Hint from '../src';

export default class Example extends React.Component {
  render() {
    return (
      <Hint localStorageID="hint-1" message="Example App">
        <div className="container1">
          test
        </div>
      </Hint>
    );
  }
}
