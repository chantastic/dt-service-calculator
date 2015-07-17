var React = require('react');
var ServiceItem = require('./ServiceItem');
var TotalItem = require('./TotalItem');
var classnames = require('classnames');

function chosenServices (service) {
  return service.chosen && service;
}

function totalServicePrices (previous, current) {
  return parseInt(previous, 10) + parseInt(current.price, 10);
}

var DtServiceCalculator = React.createClass({
  propTypes: {
    onSelect: React.PropTypes.func.isRequired,
    services: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired
  },

  getSelectedServicesTotalPrice () {
    return this.props.services
      .filter(chosenServices)
      .reduce(totalServicePrices, 0);
  },

  handleServiceClick (index) {
    this.props.onSelect(index);
  },

  render () {
    return (
      <div className="DTServiceCalculator">
        <div className="ServiceList">
          {this.props.services.map(({chosen, id, name, price}, i) => {
            return (
              <ServiceItem
               chosen={chosen}
               index={i}
               key={id}
               price={price}
               name={name}
               onSelect={this.handleServiceClick} />
            );
          })}
        </div>

        <TotalItem total={this.getSelectedServicesTotalPrice()} />
      </div>
    );
  }
});

export default DtServiceCalculator;
