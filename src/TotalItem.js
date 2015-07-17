var React = require('react');

var TotalItem = React.createClass({
  propTypes: {
    total: React.PropTypes.number.isRequired
  },

  render () {
    return (
      <div className="SelectedServiceTotal">
        <span className="SelectedServiceTotal_label">Total</span>
        <span className="SelectedServiceTotal_total">
          ${this.props.total}
        </span>
      </div>
    );
  }
});

export default TotalItem;
