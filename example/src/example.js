var React = require('react');
var DtServiceCalculator = require('dt-service-calculator');

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Our Services</h1>
        <DtServiceCalculator />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
