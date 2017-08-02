/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';

import 'purecss/build/pure.css';
import './main.css';

import Example from './example';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
// const documentationImports = {};
// const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef

ReactDOM.render(
  <div>
    <GithubCorner
      href={`https://github.com/${project}`}
      width={80}
      height={80}
      direction="right"
    />
    <Example />
  </div>,
  document.getElementById('app')
);
