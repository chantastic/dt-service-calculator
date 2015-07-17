require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var React = require('react');
var DtServiceCalculator = require('dt-service-calculator');

var mockAsyncData = [{ id: 1, name: 'Web Development', price: 300 }, { id: 2, name: 'Design', price: 400 }, { id: 3, name: 'Integration', price: 250 }, { id: 4, name: 'Training', price: 220 }];

var DtServiceCalculatorContainer = React.createClass({
  displayName: 'DtServiceCalculatorContainer',

  componentDidMount: function componentDidMount() {
    this.fetchServices();
  },

  fetchServices: function fetchServices() {
    var _this = this;

    setTimeout(function () {
      _this.setState({ services: mockAsyncData });
    }, 500);
  },

  getInitialState: function getInitialState() {
    return {
      services: []
    };
  },

  handleSelect: function handleSelect(index) {
    var services = [].concat(_toConsumableArray(this.state.services));
    services[index].chosen = services[index].chosen ? false : true;
    this.setState({ services: services });
  },

  render: function render() {
    return React.createElement(DtServiceCalculator, {
      onSelect: this.handleSelect,
      services: this.state.services });
  }
});

exports['default'] = DtServiceCalculatorContainer;
module.exports = exports['default'];

},{"dt-service-calculator":undefined,"react":undefined}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var DtServiceCalculatorContainer = require('./DtServiceCalculatorContainer');

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(DtServiceCalculatorContainer, null)
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"./DtServiceCalculatorContainer":1,"react":undefined}]},{},[2]);
