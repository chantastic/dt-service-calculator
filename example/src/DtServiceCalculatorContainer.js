var React = require('react');
var DtServiceCalculator = require('dt-service-calculator');

var DtServiceCalculatorContainer = React.createClass({
  getInitialState () {
    return {
      services: [
        { id: 1, name: 'Web Development', price: 300 },
        { id: 2, name: 'Design', price: 400 },
        { id: 3, name: 'Integration', price: 250 },
        { id: 4, name: 'Training', price: 220 }
      ]
    };
  },

  render () {
    return <DtServiceCalculator initialServices={this.state.services} />;
  }
});

export default DtServiceCalculatorContainer;
