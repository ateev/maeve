!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"));else{var mod={exports:{}};factory(mod.exports,global.react),global.maeveToggle=mod.exports}}(this,function(exports,_react){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=_interopRequireDefault(_react),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveToggle=function(_React$Component){function MaeveToggle(){return _classCallCheck(this,MaeveToggle),_possibleConstructorReturn(this,(MaeveToggle.__proto__||Object.getPrototypeOf(MaeveToggle)).apply(this,arguments))}return _inherits(MaeveToggle,_React$Component),_createClass(MaeveToggle,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"maeve-toggle"},_react2.default.createElement("input",{id:this.props.id,className:"toggle-input",type:"checkbox"}),_react2.default.createElement("label",{htmlFor:this.props.id},_react2.default.createElement("span",{className:"label-inner"}),_react2.default.createElement("span",{className:"label-switch"})))}}]),MaeveToggle}(_react2.default.Component);exports.default=MaeveToggle});