var React = require('react');
var DtServiceCalculatorContainer = require('./DtServiceCalculatorContainer');

var App = React.createClass({
  render () {
    return (
      <div>
        <DtServiceCalculatorContainer />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
