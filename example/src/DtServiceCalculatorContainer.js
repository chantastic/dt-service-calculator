var React = require('react');
var DtServiceCalculator = require('dt-service-calculator');

var mockAsyncData = [
  { id: 1, name: 'Web Development', price: 300 },
  { id: 2, name: 'Design', price: 400 },
  { id: 3, name: 'Integration', price: 250 },
  { id: 4, name: 'Training', price: 220 }
];

var DtServiceCalculatorContainer = React.createClass({
  componentDidMount () {
    this.fetchServices();
  },

  fetchServices () {
    setTimeout(() => {
      this.setState({ services: mockAsyncData });
    }, 500);
  },

  getInitialState () {
    return {
      services: []
    };
  },

  handleSelect (index) {
    let services = [...this.state.services];
    services[index].chosen = (services[index].chosen) ? false : true;
    this.setState({ services: services });
  },

  render () {
    return (
      <DtServiceCalculator
        onSelect={this.handleSelect}
        services={this.state.services} />
    );
  }
});

export default DtServiceCalculatorContainer;
