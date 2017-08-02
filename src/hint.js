import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import getStyles from './styles';
import getAbsoluteBoundingRect from './getAbsoluteBoundingRect';
import Portal from './portal';

const styleId = '____react-hint-styles___';
const styles = getStyles();

class Hint extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {},
      isHidden: false
    };

    this.width = 20;
    this.height = 20;
  }

  componentDidMount() {
    // add styles
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

    // other stuff
    if (this.props.id && localStorage[`react-hint-${this.props.id}`]) {
      this.setState({ isHidden: true });
    }
    this.update();

    window.addEventListener('resize', this.update.bind(this));
    window.addEventListener('load', this.update.bind(this));
  }

  componentWillReceiveProps() {
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update.bind(this));
    window.removeEventListener('load', this.update.bind(this));
  }

  update() {
    let child, rect, offset, x, y;
    if (this.props.byID) {
      child = document.getElementById(this.props.byID);
    } else {
      child = ReactDOM.findDOMNode(this.refs.child);
    }
    if (!child) return;

    rect = getAbsoluteBoundingRect(child);
    offset = this.getDirectionBasedOffset(rect);

    x = offset.x;
    y = offset.y;

    this.setState({
      style: {
        top: `${y}px`,
        left: `${x}px`
      }
    });
  }

  render() {
    if (this.state.isHidden || this.props.isHidden) {
      return (this.props.children) || false;
    }
    return (
      <span className="">
        {(this.props.children) ? React.cloneElement(this.props.children, { ref: 'child' }) : false}
        <Portal>
          <OverlayTrigger
            ref="popupOverlay"
            trigger="click"
            rootClose
            placement={this.getPopupPlacement()}
            overlay={(
              <Popover className="react-hint-popover" id="hint">
                <span style={{ marginBottom: '10px', display: 'block' }} >{this.props.message} </span>
                <button className="btn btn-default btn-sm" onClick={this.onClose.bind(this)}>{this.props.closeText || 'Got It!'}</button>
              </Popover>
            )}
          >
            <a className="react-hint" style={this.state.style}>
              <div className="wave" />
              <div className="inner" />
            </a>
          </OverlayTrigger>
        </Portal>
      </span>
    );
  }

  onClose() {
    this.setState({ isHidden: true });
    this.refs.popupOverlay.hide();
    if (this.props.id) {
      localStorage[`react-hint-${this.props.id}`] = true;
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  getPopupPlacement() {
    return this.props.popupDirection || 'right';
  }

  getDirectionBasedOffset(rect) {
    let dir = this.props.position || 'topright';
    let x = rect.left;
    let y = rect.top;

    // decide position based on given position string
    if (dir === 'topright') {
      x = rect.right - (this.width / 2);
      y = rect.top - (this.height / 2);
    }
    if (dir === 'top') {
      x = rect.left + (rect.width / 2) - (this.width / 2);
      y = rect.top - (this.height / 2);
    }
    if (dir === 'topleft') {
      x = rect.left - (this.width / 2);
      y = rect.top - (this.height / 2);
    }
    if (dir === 'left') {
      x = rect.left - (this.width / 2);
      y = rect.top + (rect.height / 2) - (this.height / 2);
    }
    if (dir === 'bottomleft') {
      x = rect.left - (this.width / 2);
      y = rect.bottom - (this.height / 2);
    }
    if (dir === 'bottom') {
      x = rect.left + (rect.width / 2) - (this.width / 2);
      y = rect.bottom - (this.height / 2);
    }
    if (dir === 'bottomright') {
      x = rect.right - (this.width / 2);
      y = rect.bottom - (this.height / 2);
    }
    if (dir === 'right') {
      x = rect.right - (this.width / 2);
      y = rect.top + (rect.height / 2) - (this.height / 2);
    }

    // just add offsets, if any
    x += this.props.offsetX || 0;
    y += this.props.offsetY || 0;

    return { x, y };
  }
}

Hint.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  closeText: PropTypes.string,
  position: PropTypes.string,
  popupDirection: PropTypes.string,
  onClose: PropTypes.func,
  byID: PropTypes.string,
  isHidden: PropTypes.bool,

  children: PropTypes.node,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number
};

export default Hint;
