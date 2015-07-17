var React = require('react');

var DtServiceCalculator = React.createClass({
  render () {
    return (
      <div className="DTServiceCalculator">
        <div className="ServiceList">
          <div className="ServiceItem">
            <span className="ServiceItem_name">Web Development</span>
            <span className="ServiceItem_price">$300</span>
          </div>

          <div className="ServiceItem">
            <span className="ServiceItem_name">Design</span>
            <span className="ServiceItem_price">$400</span>
          </div>

          <div className="ServiceItem">
            <span className="ServiceItem_name">Integration</span>
            <span className="ServiceItem_price">$250</span>
          </div>

          <div className="ServiceItem">
            <span className="ServiceItem_name">Training</span>
            <span className="ServiceItem_price">$220</span>
          </div>
        </div>

        <div className="SelectedServiceTotal">
          <span className="SelectedServicTotal_label">Total</span>
          <span className="SelectedServicTotal_total">$0</span>
        </div>
      </div>
    );
  }
});

export default DtServiceCalculator;
