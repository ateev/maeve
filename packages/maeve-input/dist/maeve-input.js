!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react","maeve-dropdown","lodash/debounce","./maeve-input-style.js"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"),require("maeve-dropdown"),require("lodash/debounce"),require("./maeve-input-style.js"));else{var mod={exports:{}};factory(mod.exports,global.react,global.maeveDropdown,global.debounce,global.maeveInputStyle),global.maeveInput=mod.exports}}(this,function(exports,_react,_maeveDropdown,_debounce,_maeveInputStyle){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=_interopRequireDefault(_react),_maeveDropdown2=_interopRequireDefault(_maeveDropdown),_debounce2=_interopRequireDefault(_debounce),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveInput=function(_React$Component){function MaeveInput(props){_classCallCheck(this,MaeveInput);var _this=_possibleConstructorReturn(this,(MaeveInput.__proto__||Object.getPrototypeOf(MaeveInput)).call(this,props));_this.handleChange=function(event){_this.updateValue({value:event.target.value})},_this.updateValue=function(newState){_this.valueChangeCallback(newState),_this.setState(newState)},_this.valueChangeCallback=function(newState){var valueId=!0===_this.props.multi?_this.props.valueId:_this.props.id;_this.props.onValueUpdate(newState.value,valueId)},_this.onItemSelect=function(value,event){event.stopPropagation(),_this.updateValue({value:value}),_this.setFocus(!1)},_this.onAddNewItem=function(){var valueId=!0===_this.props.multi?_this.props.valueId:_this.props.id;_this.props.autocomplete.addNewItem(_this.state.value,valueId),_this.setFocus(!1)},_this.setFocus=function(isFocus){!0===isFocus?window.addEventListener("click",_this.onPageClick,!1):window.removeEventListener("click",_this.onPageClick,!1),_this.setState({isFocus:isFocus})},_this.onPageClick=function(event){event.target.id!==_this.props.id&&_this.setFocus(!1)};var defaultVal=props.value||"";return _this.state={value:defaultVal,isFocus:!1},_this.valueChangeCallback=(0,_debounce2.default)(_this.valueChangeCallback,props.debounceTime||20),_this}return _inherits(MaeveInput,_React$Component),_createClass(MaeveInput,[{key:"componentWillReceiveProps",value:function(newProps){void 0!==newProps.value&&newProps.value!==this.state.value&&this.setState({value:newProps.value})}},{key:"getDropdown",value:function(){var dropdown="",autocomplete=this.props.autocomplete;if(void 0!==autocomplete&&!0===this.state.isFocus&&(void 0===autocomplete.trigger||autocomplete.trigger<=this.state.value.length)){var source=void 0;"object"===_typeof(autocomplete.source)?source=autocomplete.source:"function"==typeof autocomplete.source&&(source=autocomplete.source(this.state.value));var dropdownProps={items:source,onSelect:this.onItemSelect};void 0!==autocomplete.addNewItem&&(dropdownProps.addNewItem=this.onAddNewItem),dropdown=_react2.default.createElement(_maeveDropdown2.default,dropdownProps)}return dropdown}},{key:"render",value:function(){var required=this.props.required||!1,inputProps={id:this.props.id,type:"text",value:this.state.value,placeholder:this.props.placeholder,onChange:this.handleChange,required:required,onFocus:this.setFocus.bind(null,!0)},dropdown="",autocomplete=this.props.autocomplete;if(void 0!==autocomplete&&!0===this.state.isFocus){0===autocomplete.trigger&&(inputProps.onFocus=this.handleChange),dropdown=this.getDropdown()}var errorMessage=void 0!==this.props.error?_react2.default.createElement(_maeveInputStyle.ErrorMessage,{className:"error"},this.props.error.message):null;return _react2.default.createElement("div",{className:"maeve-input"},void 0!==this.props.label?_react2.default.createElement(_maeveInputStyle.InputLabel,{htmlFor:this.props.id},this.props.label):"",errorMessage,_react2.default.createElement(_maeveInputStyle.InputField,inputProps),dropdown,this.props.children)}}]),MaeveInput}(_react2.default.Component);MaeveInput.propTypes={id:_react2.default.PropTypes.string.isRequired,onValueUpdate:_react2.default.PropTypes.func.isRequired,valueId:_react2.default.PropTypes.string,multi:_react2.default.PropTypes.bool,placeholder:_react2.default.PropTypes.string,autocomplete:_react2.default.PropTypes.object,label:_react2.default.PropTypes.string,error:_react2.default.PropTypes.object},exports.default=MaeveInput}),function(global,factory){if("function"==typeof define&&define.amd)define(["exports","styled-components"],factory);else if("undefined"!=typeof exports)factory(exports,require("styled-components"));else{var mod={exports:{}};factory(mod.exports,global.styledComponents),global.maeveInputStyle=mod.exports}}(this,function(exports,_styledComponents){"use strict";function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputField=exports.ErrorMessage=exports.InputLabel=void 0;var _styledComponents2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_styledComponents),_templateObject=_taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n"],["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  display:  inline-block;\n  width: 100%;\n  color: red;\n"],["\n  display:  inline-block;\n  width: 100%;\n  color: red;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 32px;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 0px 10px;\n  box-sizing:border-box;\n"],["\n  width: 100%;\n  height: 32px;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 0px 10px;\n  box-sizing:border-box;\n"]);exports.InputLabel=_styledComponents2.default.label(_templateObject),exports.ErrorMessage=_styledComponents2.default.div(_templateObject2),exports.InputField=_styledComponents2.default.input(_templateObject3)});