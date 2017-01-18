(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'maeve-dropdown', 'lodash/throttle'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('maeve-dropdown'), require('lodash/throttle'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.maeveDropdown, global.throttle);
    global.maeveInput = mod.exports;
  }
})(this, function (exports, _react, _maeveDropdown, _throttle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _maeveDropdown2 = _interopRequireDefault(_maeveDropdown);

  var _throttle2 = _interopRequireDefault(_throttle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var MaeveInput = function (_React$Component) {
    _inherits(MaeveInput, _React$Component);

    function MaeveInput(props) {
      _classCallCheck(this, MaeveInput);

      var _this = _possibleConstructorReturn(this, (MaeveInput.__proto__ || Object.getPrototypeOf(MaeveInput)).call(this, props));

      _this.componentWillReceiveProps = function (newProps) {
        if (typeof newProps.autocomplete !== 'undefined') {
          (function () {
            var newSuggestions = newProps.autocomplete.source;
            var oldSuggestions = _this.props.autocomplete.source;
            if (newSuggestions.length !== oldSuggestions.length || newSuggestions.every(function (v, i) {
              return v !== oldSuggestions[i];
            })) {
              _this.setState({
                autocompleteSuggestions: newProps.autocomplete.source
              });
            }
          })();
        }
      };

      _this.updateValue = function (newState) {
        var valueId = _this.props.multi === true ? _this.props.valueId : _this.props.id;
        _this.props.onValueUpdate(newState.value, valueId);
        _this.setState(newState);
      };

      _this.handleChange = function (event) {
        _this.updateValue({
          value: event.target.value
        });
      };

      _this.onItemSelect = function (value) {
        _this.updateValue({
          value: value,
          autocompleteSuggestions: null
        });
      };

      _this.onAddNewItem = function () {
        var valueId = _this.props.multi === true ? _this.props.valueId : _this.props.id;
        _this.autocomplete.addNewItem(_this.state.value, valueId);
        _this.clearAutocomplete();
      };

      _this.clearAutocomplete = function (event) {
        _this.setState({
          autocompleteSuggestions: null
        });
      };

      var defaultVal = props.value || '';
      if (props.multi === true) {
        defaultVal = '';
      }
      _this.state = {
        value: defaultVal
      };

      if (typeof props.autocomplete !== 'undefined') {
        _this.state.autocompleteSuggestions = props.autocomplete.source || null;
      }
      return _this;
    }

    _createClass(MaeveInput, [{
      key: 'render',
      value: function render() {
        var inputProps = {
          id: this.props.id,
          type: 'text',
          value: this.state.value,
          placeholder: this.props.placeholder,
          onChange: (0, _throttle2.default)(this.handleChange, 10000)
        };

        var dropdown = '';

        var autocomplete = this.props.autocomplete;
        if (typeof autocomplete !== 'undefined') {
          if (autocomplete.trigger === 0) {
            inputProps.onFocus = this.handleChange;
          }
          var dropdownProps = {
            items: this.state.autocompleteSuggestions,
            onSelect: this.onItemSelect
          };
          if (typeof autocomplete.addNewItem !== 'undefined') {
            dropdownProps.addNewItem = this.onAddNewItem;
          }
          dropdown = _react2.default.createElement(_maeveDropdown2.default, dropdownProps);
        }

        return _react2.default.createElement(
          'div',
          { className: 'maeve-input' },
          _typeof(this.props.label) !== undefined ? _react2.default.createElement(
            'label',
            { htmlFor: this.props.id },
            this.props.label
          ) : '',
          _react2.default.createElement('input', inputProps),
          dropdown
        );
      }
    }]);

    return MaeveInput;
  }(_react2.default.Component);

  ;

  MaeveInput.propTypes = {
    id: _react2.default.PropTypes.string.isRequired,
    onValueUpdate: _react2.default.PropTypes.func.isRequired,
    valueId: _react2.default.PropTypes.string,
    multi: _react2.default.PropTypes.bool,
    placeholder: _react2.default.PropTypes.string,
    autocomplete: _react2.default.PropTypes.object,
    label: _react2.default.PropTypes.string
  };

  exports.default = MaeveInput;
});