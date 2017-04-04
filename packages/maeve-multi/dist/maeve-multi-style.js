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
    global.maeveMultiStyle = mod.exports;
  }
})(this, function (exports, _styledComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AddRemoveButton = exports.MaeveMultiItem = exports.MaeveMultiStyle = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 100%;\n'], ['\n  display: inline-block;\n  width: 100%;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  display: inline-block;\n'], ['\n  width: 80%;\n  display: inline-block;\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  width: 8%;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n'], ['\n  width: 8%;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var MaeveMultiStyle = exports.MaeveMultiStyle = _styledComponents2.default.div(_templateObject);

  var MaeveMultiItem = exports.MaeveMultiItem = _styledComponents2.default.div(_templateObject2);

  var AddRemoveButton = exports.AddRemoveButton = _styledComponents2.default.div(_templateObject3);
});