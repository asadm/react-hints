import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends React.Component {
  constructor() {
    super();
    this.portalElement = null;
  }

  render() {
    return false;
  }

  componentDidMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      p = document.createElement('div');
      if (this.props.portalId) {
        p.id = this.props.portalId;
      }
      document.body.appendChild(p);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  componentDidUpdate() {
    ReactDOM.render(<div {...this.props}>{this.props.children}</div>, this.portalElement);
  }
}

Portal.propTypes = {
  portalId: PropTypes.string,
  children: PropTypes.node.isRequired
};
export default Portal;
