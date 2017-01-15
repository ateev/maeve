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

      _this.filterResults = function (item, query) {
        return item.toLowerCase().includes(query.toLowerCase());
      };

      _this.updateValue = function (newState) {
        var valueId = _this.props.multi === 'true' ? _this.props.valueId : _this.props.id;
        _this.props.onValueUpdate(valueId, newState.value);
        _this.setState(newState);
      };

      _this.handleChange = function (event) {
        var updatedValue = event.target.value;
        var updatedAutocompleteSuggestions = [];

        if (typeof _this.props.autocomplete !== 'undefined' && updatedValue.length > 2) {
          updatedAutocompleteSuggestions = _this.state.autocompleteSuggestions;
          var source = _this.props.autocomplete.source;
          if (source instanceof Array) {
            updatedAutocompleteSuggestions = source.filter(function (item) {
              return _this.filterResults(item, updatedValue);
            });
          } else if (typeof source === 'function') {
            updatedAutocompleteSuggestions = source(updatedValue);
          }
        } else {
          updatedAutocompleteSuggestions = null;
        }
        _this.updateValue({
          value: updatedValue,
          autocompleteSuggestions: updatedAutocompleteSuggestions
        });
      };

      _this.onItemSelect = function (value) {
        _this.updateValue({
          value: value,
          autocompleteSuggestions: null
        });
      };

      _this.addNewItem = function () {
        _this.props.autocomplete.options.addNewItem(_this.state.value);
        _this.setState({
          autocompleteSuggestions: null
        });
      };

      _this.state = {
        value: '',
        autocompleteSuggestions: null
      };
      return _this;
    }

    _createClass(MaeveInput, [{
      key: 'render',
      value: function render() {
        var addNewItem = void 0;
        if (this.props.autocomplete !== undefined && this.props.autocomplete.options !== undefined && this.props.autocomplete.options.addNewItem !== undefined) {
          addNewItem = this.props.autocomplete.options.addNewItem;
        } else {
          addNewItem = undefined;
        }

        return _react2.default.createElement(
          'div',
          { className: 'maeve-input' },
          _typeof(this.props.label) !== undefined ? _react2.default.createElement(
            'label',
            { htmlFor: this.props.id },
            this.props.label
          ) : '',
          _react2.default.createElement('input', {
            id: this.props.id,
            type: 'text',
            name: 'maeve-input',
            value: this.state.value,
            placeholder: this.props.placeholder,
            onChange: this.handleChange
          }),
          typeof this.props.autocomplete !== 'undefined' ? _react2.default.createElement(_maeveDropdown2.default, {
            items: this.state.autocompleteSuggestions,
            options: this.props.autocomplete.options,
            onSelect: this.onItemSelect,
            addNewItem: addNewItem
          }) : ''
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
    multiple: _react2.default.PropTypes.bool,
    placeholder: _react2.default.PropTypes.string,
    autocomplete: _react2.default.PropTypes.object,
    label: _react2.default.PropTypes.string
  };

  exports.default = MaeveInput;
});