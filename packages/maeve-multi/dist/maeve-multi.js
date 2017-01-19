(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.maeveMulti = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var MaeveMulti = function (_React$Component) {
    _inherits(MaeveMulti, _React$Component);

    function MaeveMulti(props) {
      _classCallCheck(this, MaeveMulti);

      var _this = _possibleConstructorReturn(this, (MaeveMulti.__proto__ || Object.getPrototypeOf(MaeveMulti)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        childComponents: [],
        componentsCounter: 0
      };
      return _this;
    }

    _createClass(MaeveMulti, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        if (typeof this.props.componentProps !== 'undefined') {
          (function () {
            var newComponents = [];
            var componentsList = _this2.props.componentProps.map(function (props, key) {
              newComponents.push(_this2.getNewComponent(props));
            });
            _this2.setState({
              childComponents: newComponents,
              componentsCounter: newComponents.length
            });
          })();
        } else {
          this.addNewComponent();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var self = this;
        return _react2.default.createElement(
          'div',
          { className: 'maeve-multi' },
          this.state.childComponents.map(function (val, key) {
            return _react2.default.createElement(
              'div',
              { key: val.componentId, className: 'maeve-multi-item' },
              val.component,
              _this3.state.childComponents.length > 1 ? _react2.default.createElement(
                'div',
                {
                  className: 'remove-button',
                  onClick: _this3.removeComponent.bind(null, val.componentId)
                },
                ' - '
              ) : ''
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'add-button', onClick: this.addNewComponent.bind(null) },
            ' + '
          )
        );
      }
    }]);

    return MaeveMulti;
  }(_react2.default.Component);

  var _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.getNewComponent = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var component = _this4.props.children;
      var newProps = {};
      var newAddCounter = _this4.state.componentsCounter + 1;
      Object.assign(newProps, component.props, props, {
        multi: true
      });
      newProps.valueId = newProps.valueId || component.props.id + '-' + newAddCounter;
      var newComponent = _react2.default.cloneElement(component, newProps);
      var newComponentObj = {
        componentId: newComponent.props.valueId || newComponent.props.id,
        component: newComponent
      };
      return newComponentObj;
    };

    this.addNewComponent = function () {
      var newAddCounter = _this4.state.componentsCounter + 1;
      var newComponentObj = _this4.getNewComponent();
      var newComponents = [].concat(_toConsumableArray(_this4.state.childComponents), [newComponentObj]);
      _this4.setState({
        childComponents: newComponents,
        componentsCounter: newAddCounter
      });
      if (typeof _this4.props.addCallback !== 'undefined') {
        _this4.props.addCallback(newComponentObj.component.props.id);
      }
    };

    this.addPropsToComponent = function (component, newId) {
      return _react2.default.cloneElement(component, {
        multi: true,
        valueId: newId
      });
    };

    this.removeComponent = function (componentId) {
      var newComponents = _this4.state.childComponents.filter(function (item) {
        return item.componentId !== componentId;
      });
      _this4.setState({
        childComponents: newComponents
      });
      if (typeof _this4.props.removeCallback !== 'undefined') {
        _this4.props.removeCallback(componentId);
      }
    };
  };

  ;

  MaeveMulti.propTypes = {
    addCallback: _react2.default.PropTypes.func,
    removeCallback: _react2.default.PropTypes.func,
    componentProps: _react2.default.PropTypes.array
  };

  exports.default = MaeveMulti;
});