import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './styles';

const styleId = '____react-hint-styles___';
const styles = getStyles();

class Heading extends React.Component {
  componentDidMount() {
    if (!document.getElementById(styleId)) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.type = 'text/css';
      style.id = styleId;
      if (style.styleSheet) {
        style.styleSheet.cssText = styles;
      } else {
        style.appendChild(document.createTextNode(styles));
      }
      head.appendChild(style);
    }
  }
  render() {
    return (<h1>{this.props.title || 'Hello'}</h1>);
  }
}

Heading.propTypes = {
  title: PropTypes.string
};

Heading.defaultProps = {
  title: 'Hello'
};

export default Heading;
