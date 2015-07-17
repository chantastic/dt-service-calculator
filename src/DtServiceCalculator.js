var React = require('react');
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
          {this.props.services.map(({name, price, chosen}, i) => {
            return (
              <div
               className={classnames(
                 'ServiceItem',
                 chosen && 'isChosen'
               )}
               onClick={this.handleServiceClick.bind(null, i)}>
                <span className="ServiceItem_name">{name}</span>
                <span className="ServiceItem_price">${price}</span>
              </div>
            );
          })}
        </div>

        <div className="SelectedServiceTotal">
          <span className="SelectedServiceTotal_label">Total</span>
          <span className="SelectedServiceTotal_total">
            ${this.getSelectedServicesTotalPrice()}
          </span>
        </div>
      </div>
    );
  }
});

export default DtServiceCalculator;
