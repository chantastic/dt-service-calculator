var React = require('react');
var classnames = require('classnames');

function chosenServices (service) {
  return service.chosen && service;
}

function totalServicePrices (previous, current) {
  return parseInt(previous, 10) + parseInt(current.price, 10);
}

var DtServiceCalculator = React.createClass({
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

  getSelectedServicesTotalPrice () {
    return this.state.services
      .filter(chosenServices)
      .reduce(totalServicePrices, 0);
  },

  handleServiceClick (index) {
    // make a copy
    let services = [...this.state.services];

    // toggle chosen prop
    services[index].chosen = (services[index].chosen) ? false : true;

    // setState for re-render
    this.setState({ services: services });
  },

  render () {
    return (
      <div className="DTServiceCalculator">
        <div className="ServiceList">
          {this.state.services.map(({name, price, chosen}, i) => {
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
