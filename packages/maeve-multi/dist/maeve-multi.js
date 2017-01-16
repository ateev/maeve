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
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

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

      _this.addNewComponent = function () {
        var newAddCounter = _this.state.componentsCounter + 1;
        var childComponent = _this.props.children;
        var newComponentId = childComponent.props.id + '-' + newAddCounter;
        var component = _this.addPropsToComponent(_this.props.children, newComponentId);
        var newComponent = {
          componentId: newComponentId,
          component: component
        };
        var newComponents = [].concat(_toConsumableArray(_this.state.childComponents), [newComponent]);
        _this.setState({
          childComponents: newComponents,
          componentsCounter: newAddCounter
        });
        if (typeof _this.props.addCallback !== 'undefined') {
          _this.props.addCallback(newComponentId);
        }
      };

      _this.addPropsToComponent = function (component, newId) {
        return _react2.default.cloneElement(component, {
          multi: true,
          valueId: newId
        });
      };

      _this.removeComponent = function (componentId) {
        var newComponents = _this.state.childComponents.filter(function (item) {
          return item.componentId !== componentId;
        });
        _this.setState({
          childComponents: newComponents
        });
        if (typeof _this.props.removeCallback !== 'undefined') {
          _this.props.removeCallback(componentId);
        }
      };

      _this.state = {
        childComponents: [],
        componentsCounter: 0
      };
      return _this;
    }

    _createClass(MaeveMulti, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.addNewComponent();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var self = this;
        return _react2.default.createElement(
          'div',
          { className: 'maeve-multi' },
          this.state.childComponents.map(function (val, key) {
            return _react2.default.createElement(
              'div',
              { key: val.componentId, className: 'maeve-multi-item' },
              val.component,
              _this2.state.childComponents.length > 1 ? _react2.default.createElement(
                'div',
                {
                  className: 'remove-button',
                  onClick: _this2.removeComponent.bind(null, val.componentId)
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

  ;

  MaeveMulti.propTypes = {
    addCallback: _react2.default.PropTypes.func,
    removeCallback: _react2.default.PropTypes.func
  };

  exports.default = MaeveMulti;
});