require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var styles = {
  chosen: {
    color: '#fff',
    backgroundColor: '#41c7c2'
  }
};

var ServiceItem = React.createClass({
  displayName: 'ServiceItem',

  propTypes: {
    chosen: React.PropTypes.bool,
    index: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    price: React.PropTypes.number.isRequired
  },

  getStyles: function getStyles() {
    return _extends({}, this.props.chosen && styles.chosen);
  },

  handleClick: function handleClick() {
    this.props.onSelect(this.props.index);
  },

  render: function render() {
    return React.createElement(
      'div',
      {
        className: 'ServiceItem',
        onClick: this.handleClick,
        style: this.getStyles() },
      React.createElement(
        'span',
        { className: 'ServiceItem_name' },
        this.props.name
      ),
      React.createElement(
        'span',
        { className: 'ServiceItem_price' },
        '$',
        this.props.price
      )
    );
  }
});

exports['default'] = ServiceItem;
module.exports = exports['default'];

},{"react":undefined}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require("react");

var TotalItem = React.createClass({
  displayName: "TotalItem",

  propTypes: {
    total: React.PropTypes.number.isRequired
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "SelectedServiceTotal" },
      React.createElement(
        "span",
        { className: "SelectedServiceTotal_label" },
        "Total"
      ),
      React.createElement(
        "span",
        { className: "SelectedServiceTotal_total" },
        "$",
        this.props.total
      )
    );
  }
});

exports["default"] = TotalItem;
module.exports = exports["default"];

},{"react":undefined}],"dt-service-calculator":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');
var ServiceItem = require('./ServiceItem');
var TotalItem = require('./TotalItem');
var classnames = require('classnames');

function chosenServices(service) {
  return service.chosen && service;
}

function totalServicePrices(previous, current) {
  return parseInt(previous, 10) + parseInt(current.price, 10);
}

var DtServiceCalculator = React.createClass({
  displayName: 'DtServiceCalculator',

  propTypes: {
    onSelect: React.PropTypes.func.isRequired,
    services: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  getSelectedServicesTotalPrice: function getSelectedServicesTotalPrice() {
    return this.props.services.filter(chosenServices).reduce(totalServicePrices, 0);
  },

  handleServiceClick: function handleServiceClick(index) {
    this.props.onSelect(index);
  },

  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'DTServiceCalculator' },
      React.createElement(
        'div',
        { className: 'ServiceList' },
        this.props.services.map(function (_ref, i) {
          var chosen = _ref.chosen;
          var id = _ref.id;
          var name = _ref.name;
          var price = _ref.price;

          return React.createElement(ServiceItem, {
            chosen: chosen,
            index: i,
            key: id,
            price: price,
            name: name,
            onSelect: _this.handleServiceClick });
        })
      ),
      React.createElement(TotalItem, { total: this.getSelectedServicesTotalPrice() })
    );
  }
});

exports['default'] = DtServiceCalculator;
module.exports = exports['default'];

},{"./ServiceItem":1,"./TotalItem":2,"classnames":undefined,"react":undefined}]},{},[]);
