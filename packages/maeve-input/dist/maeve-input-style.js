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
    global.maeveInputStyle = mod.exports;
  }
})(this, function (exports, _styledComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextAreaField = exports.InputField = exports.ErrorMessage = exports.DropdownWrapper = exports.MaeveInputWrapper = exports.InputLabel = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n'], ['\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  background: #f8f8f8;\n  z-index: 2;\n  border-radius: 2px;\n'], ['\n  position: absolute;\n  background: #f8f8f8;\n  z-index: 2;\n  border-radius: 2px;\n']),
      _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 100%;\n  color: red;\n'], ['\n  display: inline-block;\n  width: 100%;\n  color: red;\n']),
      _templateObject5 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 32px;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 10px;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  height: 32px;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 10px;\n  box-sizing: border-box;\n']),
      _templateObject6 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 64px;\n  outline: none;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 0px 10px;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  height: 64px;\n  outline: none;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 0px 10px;\n  box-sizing: border-box;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var InputLabel = exports.InputLabel = _styledComponents2.default.label(_templateObject);

  var MaeveInputWrapper = exports.MaeveInputWrapper = _styledComponents2.default.div(_templateObject2);

  var DropdownWrapper = exports.DropdownWrapper = _styledComponents2.default.div(_templateObject3);

  var ErrorMessage = exports.ErrorMessage = _styledComponents2.default.div(_templateObject4);

  var InputField = exports.InputField = _styledComponents2.default.input(_templateObject5);

  var TextAreaField = exports.TextAreaField = _styledComponents2.default.textarea(_templateObject6);
});