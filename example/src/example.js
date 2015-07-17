var React = require('react');
var DtServiceCalculator = require('dt-service-calculator');

var App = React.createClass({
  render () {
    return (
      <div>
        <DtServiceCalculator />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
