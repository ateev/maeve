(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents);
    global.maeveToggleStyle = mod.exports;
  }
})(this, function (exports, _styledComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OnOffswitchSwitch = exports.OnOffswitchInner = exports.OnOffswitchLabel = exports.OnOffSwitchCheckBox = exports.OnOffSwitch = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 76px;\n  display: inline-block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n'], ['\n  position: relative;\n  width: 76px;\n  display: inline-block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  display: none;\n  &:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n  }\n  &:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n  }\n'], ['\n  display: none;\n  &:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n  }\n  &:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n  }\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n'], ['\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n']),
      _templateObject4 = _taggedTemplateLiteral(['\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n  &:before, &:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 30px;\n    padding: 0;\n    line-height: 30px;\n    font-size: 14px;\n    color: white;\n    font-weight: bold;\n    box-sizing: border-box;\n  }\n  &:before {\n    content: "YES";\n    padding-left: 10px;\n    background-color: #36B23C; color: #FFFFFF;\n  }\n  &:after {\n    content: "NO";\n    padding-right: 10px;\n    background-color: #E96C6C; color: #FFFFFF;\n    text-align: right;\n  }\n'], ['\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n  &:before, &:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 30px;\n    padding: 0;\n    line-height: 30px;\n    font-size: 14px;\n    color: white;\n    font-weight: bold;\n    box-sizing: border-box;\n  }\n  &:before {\n    content: "YES";\n    padding-left: 10px;\n    background-color: #36B23C; color: #FFFFFF;\n  }\n  &:after {\n    content: "NO";\n    padding-right: 10px;\n    background-color: #E96C6C; color: #FFFFFF;\n    text-align: right;\n  }\n']),
      _templateObject5 = _taggedTemplateLiteral(['\n  display: block; width: 17px;\n  margin: 6.5px;\n  background: #FFFFFF;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 42px;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n'], ['\n  display: block; width: 17px;\n  margin: 6.5px;\n  background: #FFFFFF;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 42px;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var OnOffSwitch = exports.OnOffSwitch = _styledComponents2.default.div(_templateObject);

  var OnOffSwitchCheckBox = exports.OnOffSwitchCheckBox = _styledComponents2.default.input(_templateObject2);

  var OnOffswitchLabel = exports.OnOffswitchLabel = _styledComponents2.default.label(_templateObject3);

  var OnOffswitchInner = exports.OnOffswitchInner = _styledComponents2.default.div(_templateObject4);

  var OnOffswitchSwitch = exports.OnOffswitchSwitch = _styledComponents2.default.label(_templateObject5);
});