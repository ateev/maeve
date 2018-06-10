(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'maeve/packages/maeve-dropdown', 'lodash/debounce', './maeve-input-style.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('maeve/packages/maeve-dropdown'), require('lodash/debounce'), require('./maeve-input-style.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.maeveDropdown, global.debounce, global.maeveInputStyle);
    global.maeveInput = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _maeveDropdown, _debounce, _maeveInputStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _maeveDropdown2 = _interopRequireDefault(_maeveDropdown);

  var _debounce2 = _interopRequireDefault(_debounce);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var MaeveInput = function (_React$Component) {
    _inherits(MaeveInput, _React$Component);

    function MaeveInput(props) {
      _classCallCheck(this, MaeveInput);

      var _this = _possibleConstructorReturn(this, (MaeveInput.__proto__ || Object.getPrototypeOf(MaeveInput)).call(this, props));

      _this.filterResults = function (item, query) {
        if (_this.autoCompleteTrigger === 0) {
          return item;
        } else {
          return item.toLowerCase().includes(query.toLowerCase());
        }
      };

      _this.handleChange = function (event) {
        var updatedValue = event.target.value;
        var updatedAutocompleteSuggestions = [];
        if (typeof _this.props.autocomplete !== 'undefined' && typeof _this.props.autocomplete.source !== 'undefined' && _this.props.autocomplete.search === true) {
          updatedAutocompleteSuggestions = _this.props.autocomplete.source.filter(function (item) {
            return _this.filterResults(item, updatedValue);
          });
        }
        _this.updateValue({
          currentValue: updatedValue,
          autocompleteSuggestions: updatedAutocompleteSuggestions
        });
      };

      _this.updateValue = function (newState) {
        _this.setState(newState);
        _this.valueChangeCallback(newState);
      };

      _this.valueChangeCallback = function (newState) {
        if (typeof _this.props.onValueUpdate !== 'undefined') {
          var valueId = _this.props.multi === true ? _this.props.valueId : _this.props.id;
          _this.props.onValueUpdate(newState.currentValue, valueId);
        }
      };

      _this.onItemSelect = function (currentValue, event) {
        event.stopPropagation();
        _this.updateValue({
          currentValue: currentValue,
          autocompleteSuggestions: []
        });
        _this.setFocus(false);
      };

      _this.onAddNewItem = function () {
        var valueId = _this.props.multi === true ? _this.props.valueId : _this.props.id;
        _this.props.autocomplete.addNewItem(_this.state.value, valueId);
        _this.setFocus(false);
      };

      _this.setFocus = function (isFocus) {
        isFocus === true ? window.addEventListener('click', _this.onPageClick, false) : window.removeEventListener('click', _this.onPageClick, false);
        _this.setState({
          isFocus: isFocus
        });
      };

      _this.onPageClick = function (event) {
        event.target.id !== _this.props.id && _this.setFocus(false);
      };

      // Setting default value to empty string if no val provided.
      _this.state = {
        currentValue: props.value || '',
        isFocus: false,
        autocompleteSuggestions: []
      };

      // Calling the value change callblack with 20ms debounce
      _this.valueChangeCallback = (0, _debounce2.default)(_this.valueChangeCallback, props.debounceTime || 20);
      return _this;
    }

    _createClass(MaeveInput, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        // Updating the value only if different from the currect value.
        if (typeof newProps.value !== 'undefined' && newProps.value !== this.state.currentValue) {
          this.setState({
            currentValue: newProps.value
          });
        }
      }
    }, {
      key: 'getDropdown',
      value: function getDropdown() {
        var dropdown = '';
        var autocomplete = this.props.autocomplete;
        if (typeof autocomplete !== 'undefined' && this.state.isFocus === true && (typeof autocomplete.trigger === 'undefined' || autocomplete.trigger <= this.state.value.length)) {
          var source = autocomplete.source;
          if (autocomplete.search === true) {
            source = this.state.autocompleteSuggestions;
          }
          var dropdownProps = {
            items: source,
            onSelect: this.onItemSelect
          };
          if (typeof autocomplete.addNewItem !== 'undefined') {
            dropdownProps.addNewItem = this.onAddNewItem;
          }
          dropdown = _react2.default.createElement(
            _maeveInputStyle.DropdownWrapper,
            null,
            _react2.default.createElement(_maeveDropdown2.default, dropdownProps)
          );
        }
        return dropdown;
      }
    }, {
      key: 'render',
      value: function render() {
        // Setting the input props attributes set up by maeve.
        var inputProps = {
          value: this.state.currentValue,
          onChange: this.handleChange,
          onFocus: this.setFocus.bind(null, true)
        };

        // In case dropdown is required for the input field.
        var dropdown = '';
        var autocomplete = this.props.autocomplete;
        if (typeof autocomplete !== 'undefined' && this.state.isFocus === true) {
          var trigger = autocomplete.trigger;
          if (trigger === 0) {
            inputProps.onFocus = this.handleChange;
          }
          dropdown = this.getDropdown();
        }

        // If error is passed in the props, show this error message
        var errorMessage = typeof this.props.error !== 'undefined' ? _react2.default.createElement(
          _maeveInputStyle.ErrorMessage,
          { className: 'error' },
          this.props.error.message
        ) : null;

        // Merging the props with the new attributes for input field.
        inputProps = Object.assign({}, this.props, inputProps);

        // If Label text passed, render a label.
        var label = typeof this.props.label !== 'undefined' ? _react2.default.createElement(
          _maeveInputStyle.InputLabel,
          { htmlFor: this.props.id },
          this.props.label
        ) : null;

        var Input = void 0;
        if (this.props.type === 'textarea') {
          Input = _maeveInputStyle.TextAreaField;
        } else {
          Input = _maeveInputStyle.InputField;
        }
        // Creating the final component
        var FinalComponent = _react2.default.createElement(Input, inputProps);
        return _react2.default.createElement(
          _maeveInputStyle.MaeveInputWrapper,
          { className: inputProps.className || '' },
          label,
          errorMessage,
          FinalComponent,
          dropdown,
          this.props.children
        );
      }
    }]);

    return MaeveInput;
  }(_react2.default.Component);

  ;

  MaeveInput.propTypes = {
    id: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string.isRequired,
    valueId: _propTypes2.default.string,
    multi: _propTypes2.default.bool,
    autocomplete: _propTypes2.default.object,
    label: _propTypes2.default.string,
    error: _propTypes2.default.object
  };

  exports.default = MaeveInput;
});