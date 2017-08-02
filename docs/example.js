import React from 'react';
import Highlight from 'react-highlight';
import '../node_modules/highlight.js/styles/monokai-sublime.css';

// Your component being loaded. Can be used below
import Hint from '../src';

const sample1 = `
<Hint
  id="hint-1"
  message="You can put the hint at any side of the element."
  position="top">
    <button className="btn btn-lg btn-default">
      Action!
    </button>
</Hint>
`;

const sample2 = `
<Hint
  id="hint-2"
  message="You can choose which side this popup will show."
  position="left"
  popupDirection="top">
    <div className="ex1">
      ...
    </div>
</Hint>
`;

export default class Example extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-12 text-center">
          <h1><small><a href="https://github.com/asadm">asadm</a> / </small>React Hints</h1>
          <br /><br />
          <br /><br />
          <br /><br />
          <Hint
            id="hint-title"
            message="Place some helpful tip here."
            position="top"
            popupDirection="bottom"
          >
            <h3>Wrap your element with <code>{'<Hint/>'}</code> and a hint message.</h3>
          </Hint>
          <br /><br />
          <br /><br />
          <br /><br />
          <hr />
        </div>
        <div className="col-xs-12 col-md-6 text-center">
          <br />

          <h4>Show hints while onboarding new users to your product.</h4>
          <br />
          <br />
          <Hint
            id="hint-1"
            message="You can put the hint at any side of the element."
            position="top"
          >
            <button className="btn btn-lg btn-default">
              Action!
            </button>
          </Hint>
        </div>
        <div className="col-xs-12 col-md-6">
          <p>Code:</p>
          <Highlight className="jsx">
            {sample1.trim()}
          </Highlight>
        </div>
        <div className="col-xs-12">
          <hr />
        </div>
        <div className="col-xs-12 col-md-6 text-center">
          <h4>Another Example</h4><br />
          <Hint
            id="hint-2"
            message="You can choose which side this popup will show."
            position="left"
            popupDirection="top"
          >
            <div className="ex1">
              <b>Example Element</b>
              <br />
              <small>with hint on left</small>
            </div>
          </Hint>
        </div>
        <div className="col-xs-12 col-md-6">
          <p>Code:</p>
          <Highlight className="jsx">
            {sample2.trim()}
          </Highlight>
        </div>
        <div className="col-xs-12">
          <hr />
          <h3>Props</h3>
          <table className="table table-hover table-props">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>message</td>
                <td>string or node (required)</td>
                <td>-</td>
                <td>The message to display in the popover when hint is clicked.
                <br />Can be string, any React element, etc.</td>
              </tr>
              <tr>
                <td>id</td>
                <td>string (required)</td>
                <td>-</td>
                <td>In order for the hint to appear only once, <code>id</code> is used
                <br />to remember if user had already dismissed this hint before.
                <br /><br />
                The state is stored is <code>localStorage</code> so user does not see the hint
                <br />even after page refresh.</td>
              </tr>
              <tr>
                <td>position</td>
                <td>string<br />One of: <code>{'\'topright\''}</code><span>, </span>
                  <code>{'\'top\''}</code><span>, </span>
                  <code>{'\'topleft\''}</code><span>, </span>
                  <code>{'\'left\''}</code><span>, </span>
                  <code>{'\'bottomleft\''}</code><span>, </span>
                  <code>{'\'bottom\''}</code><span>, </span>
                  <code>{'\'bottomright\''}</code><span>, </span>
                  <code>{'\'right\''}</code>
                </td>
                <td><code>{'\'topright\''}</code></td>
                <td>Which side of the element should the hint be on.</td>
              </tr>
              <tr>
                <td>popupDirection</td>
                <td>string<br />One of: <code>{'\'topright\''}</code><span>, </span>
                  <code>{'\'top\''}</code><span>, </span>
                  <code>{'\'topleft\''}</code><span>, </span>
                  <code>{'\'left\''}</code><span>, </span>
                  <code>{'\'bottomleft\''}</code><span>, </span>
                  <code>{'\'bottom\''}</code><span>, </span>
                  <code>{'\'bottomright\''}</code><span>, </span>
                  <code>{'\'right\''}</code>
                </td>
                <td><code>{'\'right\''}</code></td>
                <td>Which side of the <b>hint</b> should the popup appear on,
                <br />when hint is clicked.</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>func</td>
                <td>-</td>
                <td>Optional callback can be provided to be called
                <br />when hint is dismissed by user.</td>
              </tr>
              <tr>
                <td>closeText</td>
                <td>string</td>
                <td><code>{'\'Got it!\''}</code></td>
                <td>Text for the close/dismiss button.</td>
              </tr>
              <tr>
                <td>isHidden</td>
                <td>bool</td>
                <td><code>false</code></td>
                <td>Forcefully hide the hint.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
