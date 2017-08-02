/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';

// import './bootstrap.css';
import './main.css';

import Example from './example';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
// const documentationImports = {};
// const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef

ReactDOM.render(
  <div>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
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
