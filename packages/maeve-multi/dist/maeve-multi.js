!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react","prop-types","./maeve-multi-style"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"),require("prop-types"),require("./maeve-multi-style"));else{var mod={exports:{}};factory(mod.exports,global.react,global.propTypes,global.maeveMultiStyle),global.maeveMulti=mod.exports}}(this,function(exports,_react,_propTypes,_maeveMultiStyle){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=_interopRequireDefault(_react),_propTypes2=_interopRequireDefault(_propTypes),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveMulti=function(_React$Component){function MaeveMulti(props){_classCallCheck(this,MaeveMulti);var _this=_possibleConstructorReturn(this,(MaeveMulti.__proto__||Object.getPrototypeOf(MaeveMulti)).call(this,props));return _initialiseProps.call(_this),_this.state={childComponents:[],componentsCounter:0},_this}return _inherits(MaeveMulti,_React$Component),_createClass(MaeveMulti,[{key:"componentDidMount",value:function(){this.addInitialComponents(this.props)}},{key:"componentWillReceiveProps",value:function(newProps){this.addInitialComponents(newProps)}},{key:"render",value:function(){var _this2=this,removeButtonLimit=!0===this.props.initWithZero?0:1;return _react2.default.createElement(_maeveMultiStyle.MaeveMultiStyle,{className:"maeve-multi"},this.state.childComponents.map(function(val,key){return _react2.default.createElement(_maeveMultiStyle.MaeveMultiItem,{key:val.componentId,className:"maeve-multi-item"},_react2.default.createElement(_maeveMultiStyle.ChildComponent,null,val.component),_this2.state.childComponents.length>removeButtonLimit?_react2.default.createElement(_maeveMultiStyle.AddRemoveButton,{className:"add-remove-button",onClick:_this2.removeComponent.bind(null,val.componentId)}," ",_this2.props.removeButtonText||"-"," "):"")}),_react2.default.createElement(_maeveMultiStyle.AddRemoveButton,{className:"add-remove-button",onClick:this.addNewComponent.bind(null)},this.props.addButtonText||"+","}"))}}]),MaeveMulti}(_react2.default.Component),_initialiseProps=function(){var _this3=this;this.addInitialComponents=function(props){if(void 0!==props.componentProps){var newComponents=props.componentProps.map(function(props,key){return _this3.getNewComponent(props)}),newCounter=Math.max(newComponents.length,_this3.state.componentsCounter);_this3.setState({childComponents:newComponents,componentsCounter:newCounter})}else!0!==props.initWithZero&&_this3.addNewComponent()},this.getNewComponent=function(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},component=_this3.props.children,newProps={},newAddCounter=_this3.state.componentsCounter+1;Object.assign(newProps,component.props,props,{multi:!0}),newProps.valueId=newProps.valueId||component.props.id+"-"+newAddCounter;var newComponent=_react2.default.cloneElement(component,newProps);return{componentId:newComponent.props.valueId||newComponent.props.id,component:newComponent}},this.addNewComponent=function(){if(void 0!==_this3.props.addCallback){var component=_this3.props.children;_this3.props.addCallback(component.props.id+"-"+(_this3.state.componentsCounter+1))}var newAddCounter=_this3.state.componentsCounter+1,newComponentObj=_this3.getNewComponent(),newComponents=[].concat(_toConsumableArray(_this3.state.childComponents),[newComponentObj]);_this3.setState({childComponents:newComponents,componentsCounter:newAddCounter})},this.addPropsToComponent=function(component,newId){return _react2.default.cloneElement(component,{multi:!0,valueId:newId})},this.removeComponent=function(componentId){var newComponents=_this3.state.childComponents.filter(function(item){return item.componentId!==componentId});void 0!==_this3.props.removeCallback&&_this3.props.removeCallback(componentId),_this3.setState({childComponents:newComponents})}};MaeveMulti.propTypes={addCallback:_propTypes2.default.func,removeCallback:_propTypes2.default.func,componentProps:_propTypes2.default.array},exports.default=MaeveMulti});