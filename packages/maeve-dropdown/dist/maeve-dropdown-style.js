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
    global.maeveDropdownStyle = mod.exports;
  }
})(this, function (exports, _styledComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MaeveDropdownListItem = exports.MaeveDropdownList = exports.MaeveDropDown = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n'], ['\n  position: absolute;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  list-style-type: none;\n  padding: 0;\n  width: 377px;\n  margin: 0;\n  background: #f2f2f2;\n  border: 1px solid #efefef;\n  border-top: 0px;\n'], ['\n  list-style-type: none;\n  padding: 0;\n  width: 377px;\n  margin: 0;\n  background: #f2f2f2;\n  border: 1px solid #efefef;\n  border-top: 0px;\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  padding: 4px 8px;\n  font-size: 14px;\n  color:  #424242;\n  padding: 7px;\n  border\': 1px solid #ececec;\n  borderTop: 0px;\n  cursor: pointer;\n  &:hover {\n    background: #3fa9f5;\n    color: #fff;\n  }\n'], ['\n  padding: 4px 8px;\n  font-size: 14px;\n  color:  #424242;\n  padding: 7px;\n  border\': 1px solid #ececec;\n  borderTop: 0px;\n  cursor: pointer;\n  &:hover {\n    background: #3fa9f5;\n    color: #fff;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var MaeveDropDown = exports.MaeveDropDown = _styledComponents2.default.div(_templateObject);

  var MaeveDropdownList = exports.MaeveDropdownList = _styledComponents2.default.ul(_templateObject2);

  var MaeveDropdownListItem = exports.MaeveDropdownListItem = _styledComponents2.default.li(_templateObject3);
});