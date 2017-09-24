!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react","./maeve-select-style.js"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"),require("./maeve-select-style.js"));else{var mod={exports:{}};factory(mod.exports,global.react,global.maeveSelectStyle),global.maeveSelect=mod.exports}}(this,function(exports,_react,_maeveSelectStyle){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_react),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveSelect=function(_React$Component){function MaeveSelect(props){_classCallCheck(this,MaeveSelect);var _this=_possibleConstructorReturn(this,(MaeveSelect.__proto__||Object.getPrototypeOf(MaeveSelect)).call(this,props));return _this.handleChange=function(event){_this.updateValue({value:event.target.value})},_this.updateValue=function(newState){_this.valueChangeCallback(newState),_this.setState(newState)},_this.valueChangeCallback=function(newState){if(void 0!==_this.props.onValueUpdate){var valueId=!0===_this.props.multi?_this.props.valueId:_this.props.id;_this.props.onValueUpdate(newState.value,valueId)}},_this.onItemSelect=function(value,event){event.stopPropagation(),_this.updateValue({value:value}),_this.setFocus(!1)},_this.setFocus=function(isFocus){!0===isFocus?window.addEventListener("click",_this.onPageClick,!1):window.removeEventListener("click",_this.onPageClick,!1),_this.setState({isFocus:isFocus})},_this.onPageClick=function(event){event.target.id!==_this.props.id&&_this.setFocus(!1)},_this.state={value:props.value||"",isFocus:!1},_this}return _inherits(MaeveSelect,_React$Component),_createClass(MaeveSelect,[{key:"componentWillReceiveProps",value:function(newProps){void 0!==newProps.value&&newProps.value!==this.state.value&&this.setState({value:newProps.value})}},{key:"render",value:function(){var inputProps={value:this.state.value,onChange:this.handleChange,onFocus:this.setFocus.bind(null,!0)},errorMessage=void 0!==this.props.error?_react2.default.createElement(_maeveSelectStyle.ErrorMessage,{className:"error"},this.props.error.message):null;inputProps=Object.assign({},inputProps,this.props);var label=void 0!==this.props.label?_react2.default.createElement(_maeveSelectStyle.InputLabel,{htmlFor:this.props.id},this.props.label):null,options=this.props.options.map(function(item,index){return _react2.default.createElement("option",{key:"input-select-"+index,value:item},item)});void 0!==this.props.nullOption&&options.push(_react2.default.createElement("option",{value:"",disabled:!0,selected:!0},this.props.nullOption));var FinalComponent=_react2.default.createElement(_maeveSelectStyle.InputSelect,inputProps,options);return _react2.default.createElement("div",{className:"maeve-select"},label,errorMessage,FinalComponent)}}]),MaeveSelect}(_react2.default.Component);MaeveSelect.propTypes={id:_react2.default.PropTypes.string.isRequired,label:_react2.default.PropTypes.string,options:_react2.default.PropTypes.array.isRequired,error:_react2.default.PropTypes.object},exports.default=MaeveSelect}),function(global,factory){if("function"==typeof define&&define.amd)define(["exports","styled-components"],factory);else if("undefined"!=typeof exports)factory(exports,require("styled-components"));else{var mod={exports:{}};factory(mod.exports,global.styledComponents),global.maeveSelectStyle=mod.exports}}(this,function(exports,_styledComponents){"use strict";function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputSelect=exports.ErrorMessage=exports.InputLabel=void 0;var _styledComponents2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_styledComponents),_templateObject=_taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n"],["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  display:  inline-block;\n  width: 100%;\n  color: red;\n"],["\n  display:  inline-block;\n  width: 100%;\n  color: red;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 32px;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 0px 10px;\n  box-sizing:border-box;\n"],["\n  width: 100%;\n  height: 32px;\n  border-radius: 2px;\n  border: solid 1px #cccccc;\n  padding: 0px 10px;\n  box-sizing:border-box;\n"]);exports.InputLabel=_styledComponents2.default.label(_templateObject),exports.ErrorMessage=_styledComponents2.default.div(_templateObject2),exports.InputSelect=_styledComponents2.default.select(_templateObject3)});