(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './maeve-select-style.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./maeve-select-style.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.maeveSelectStyle);
    global.maeveSelect = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _maeveSelectStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var MaeveSelect = function (_React$Component) {
    _inherits(MaeveSelect, _React$Component);

    function MaeveSelect(props) {
      _classCallCheck(this, MaeveSelect);

      var _this = _possibleConstructorReturn(this, (MaeveSelect.__proto__ || Object.getPrototypeOf(MaeveSelect)).call(this, props));

      _this.handleChange = function (event) {
        _this.updateValue({
          value: event.target.value
        });
      };

      _this.updateValue = function (newState) {
        _this.valueChangeCallback(newState);
        _this.setState(newState);
      };

      _this.valueChangeCallback = function (newState) {
        if (typeof _this.props.onValueUpdate !== 'undefined') {
          var valueId = _this.props.multi === true ? _this.props.valueId : _this.props.id;
          _this.props.onValueUpdate(newState.value, valueId);
        }
      };

      _this.onItemSelect = function (value, event) {
        event.stopPropagation();
        _this.updateValue({
          value: value
        });
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
        value: props.value || '',
        isFocus: false
      };
      return _this;
    }

    _createClass(MaeveSelect, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        // Updating the value only if different from the currect value.
        if (typeof newProps.value !== 'undefined' && newProps.value !== this.state.value) {
          this.setState({
            value: newProps.value
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // Setting the input props attributes set up by maeve.
        var inputProps = {
          value: this.state.value,
          onChange: this.handleChange,
          onFocus: this.setFocus.bind(null, true)
        };

        // If error is passed in the props, show this error message
        var errorMessage = typeof this.props.error !== 'undefined' ? _react2.default.createElement(
          _maeveSelectStyle.ErrorMessage,
          { className: 'error' },
          this.props.error.message
        ) : null;

        // Merging the props with the new attributes for input field.
        inputProps = Object.assign({}, inputProps, this.props);

        // If Label text passed, render a label.
        var label = typeof this.props.label !== 'undefined' ? _react2.default.createElement(
          _maeveSelectStyle.InputLabel,
          { htmlFor: this.props.id },
          this.props.label
        ) : null;

        var options = this.props.options.map(function (item, index) {
          return _react2.default.createElement(
            'option',
            { key: 'input-select-' + index, value: item },
            item
          );
        });

        if (typeof this.props.nullOption !== 'undefined') {
          inputProps.defaultValue = "";
          options.push(_react2.default.createElement(
            'option',
            { key: 'input-select-last', disabled: true, value: '' },
            this.props.nullOption
          ));
        }
        // Creating the final component
        var FinalComponent = _react2.default.createElement(
          _maeveSelectStyle.InputSelect,
          inputProps,
          options
        );
        return _react2.default.createElement(
          'div',
          { className: 'maeve-select' },
          label,
          errorMessage,
          FinalComponent
        );
      }
    }]);

    return MaeveSelect;
  }(_react2.default.Component);

  ;

  MaeveSelect.propTypes = {
    id: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string,
    options: _propTypes2.default.array.isRequired,
    error: _propTypes2.default.object
  };

  exports.default = MaeveSelect;
});