export default function getStyles() {
  return `
/* HINTS */

.react-hint-popover, 
.react-hint-popover *,
.react-hint,
.react-hint * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@-webkit-keyframes "hint-wave" {
 0% {
    -webkit-transform: scale(0);
    opacity: 0.0;
 }
 25% {
    -webkit-transform: scale(0);
    opacity: 0.1;
 }
 50% {
    -webkit-transform: scale(0.1);
    opacity: 0.3;
 }
 75% {
    -webkit-transform: scale(0.5);
    opacity: 0.5;
 }
 100% {
    -webkit-transform: scale(1.5);
    opacity: 0.0;
 }
}

@-moz-keyframes "hint-wave" {
 0% {
    -moz-transform: scale(0);
    opacity: 0.0;
 }
 25% {
    -moz-transform: scale(0);
    opacity: 0.1;
 }
 50% {
    -moz-transform: scale(0.1);
    opacity: 0.3;
 }
 75% {
    -moz-transform: scale(0.5);
    opacity: 0.5;
 }
 100% {
    -moz-transform: scale(1.5);
    opacity: 0.0;
 }
}
@keyframes "hint-wave" {
 0% {
    transform: scale(0);
    opacity: 0.0;
 }
 25% {
    transform: scale(0);
    opacity: 0.1;
 }
 50% {
    transform: scale(0.1);
    opacity: 0.3;
 }
 75% {
    transform: scale(0.5);
    opacity: 0.5;
 }
 100% {
    transform: scale(1.5);
    opacity: 0.0;
 }
}

.react-hint {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(60, 60, 60, 0.27);
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;

  z-index: 10;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;

  box-shadow: 2px 2px 5px rgba(60, 60, 60, 0.27);
}
.react-hint .wave{
  border: 10px solid rgba(146, 146, 146, 0.36);
  background: transparent;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
  height: 50px;
  width: 50px;
  -webkit-animation: hint-wave 3s ease-out;
  -moz-animation: hint-wave 3s ease-out;
  animation: hint-wave 3s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  position: absolute;
  top: -17px;
  left: -17px;
  z-index: 1;
  opacity: 0;
}

.react-hint .inner{
  width: 10px;
  height: 10px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-color: rgba(60, 60, 60, 0.27);
  z-index: 10;
  position: absolute;
  top: 3px;
  left: 3px;
  -webkit-transition: border-color 0.2s ease-out;
  -moz-transition: border-color 0.2s ease-out;
  -ms-transition: border-color 0.2s ease-out;
  -o-transition: border-color 0.2s ease-out;
  transition: border-color 0.2s ease-out;
}

.react-hint:hover{
  border: 2px solid rgba(60, 60, 60, 0.57);
}
.react-hint:hover .inner{
  border: 5px solid rgba(60, 60, 60, 0.57);
  width: 0px;
  height: 0px;
}

.react-hint-popover.fade {
  opacity: 0;
  -webkit-transition: opacity .15s linear;
  -o-transition: opacity .15s linear;
  transition: opacity .15s linear;
}
.react-hint-popover.fade.in {
  opacity: 1
}


/* 
POP OVER STYLES
Extracted from Bootstrap
*/

.react-hint-popover button {
  color: inherit;
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.react-hint-popover button::-moz-focus-inner{
  border: 0;
  padding: 0;
}

.react-hint-popover .btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.react-hint-popover .btn:focus,
.react-hint-popover .btn:active:focus,
.react-hint-popover .btn.active:focus,
.react-hint-popover .btn.focus,
.react-hint-popover .btn:active.focus,
.react-hint-popover .btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.react-hint-popover .btn:hover,
.react-hint-popover .btn:focus,
.react-hint-popover .btn.focus {
  color: #333333;
  text-decoration: none;
}
.react-hint-popover .btn:active,
.react-hint-popover .btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.react-hint-popover .btn.disabled,
.react-hint-popover .btn[disabled],
.react-hint-popover fieldset[disabled] .btn {
  cursor: not-allowed;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.react-hint-popover a.btn.disabled,
.react-hint-popover fieldset[disabled] a.btn {
  pointer-events: none;
}
.react-hint-popover .btn-default {
  color: #333333;
  background-color: #ffffff;
  border-color: #cccccc;
}
.react-hint-popover .btn-default:focus,
.react-hint-popover .btn-default.focus {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.react-hint-popover .btn-default:hover {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.react-hint-popover .btn-default:active,
.react-hint-popover .btn-default.active,
.react-hint-popover .open > .dropdown-toggle.btn-default {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.react-hint-popover .btn-default:active:hover,
.react-hint-popover .btn-default.active:hover,
.react-hint-popover .open > .dropdown-toggle.btn-default:hover,
.react-hint-popover .btn-default:active:focus,
.react-hint-popover .btn-default.active:focus,
.react-hint-popover .open > .dropdown-toggle.btn-default:focus,
.react-hint-popover .btn-default:active.focus,
.react-hint-popover .btn-default.active.focus,
.react-hint-popover .open > .dropdown-toggle.btn-default.focus {
  color: #333333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.react-hint-popover .btn-default:active,
.react-hint-popover .btn-default.active,
.react-hint-popover .open > .dropdown-toggle.btn-default {
  background-image: none;
}
.react-hint-popover .btn-default.disabled:hover,
.react-hint-popover .btn-default[disabled]:hover,
.react-hint-popover fieldset[disabled] .btn-default:hover,
.react-hint-popover .btn-default.disabled:focus,
.react-hint-popover .btn-default[disabled]:focus,
.react-hint-popover fieldset[disabled] .btn-default:focus,
.react-hint-popover .btn-default.disabled.focus,
.react-hint-popover .btn-default[disabled].focus,
.react-hint-popover fieldset[disabled] .btn-default.focus {
  background-color: #ffffff;
  border-color: #cccccc;
}

.react-hint-popover .btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.react-hint-popover.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 14px;
  background-color: #ffffff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.react-hint-popover.popover.top {
  margin-top: -10px;
}
.react-hint-popover.popover.right {
  margin-left: 10px;
}
.react-hint-popover.popover.bottom {
  margin-top: 10px;
}
.react-hint-popover.popover.left {
  margin-left: -10px;
}
.react-hint-popover .popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 14px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.react-hint-popover .popover-content {
  padding: 9px 14px;
}
.react-hint-popover.popover > .arrow,
.react-hint-popover.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.react-hint-popover.popover > .arrow {
  border-width: 11px;
}
.react-hint-popover.popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.react-hint-popover.popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.react-hint-popover.popover.top > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #ffffff;
}
.react-hint-popover.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.react-hint-popover.popover.right > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #ffffff;
}
.react-hint-popover.popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.react-hint-popover.popover.bottom > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #ffffff;
}
.react-hint-popover.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.react-hint-popover.popover.left > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #ffffff;
  bottom: -10px;
}
  `;
}
