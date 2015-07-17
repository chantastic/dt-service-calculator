var React = require('react');

const styles = {
  chosen: {
    color: '#fff',
    backgroundColor: '#41c7c2'
  }
};

var ServiceItem = React.createClass({
  propTypes: {
    chosen: React.PropTypes.bool,
    index: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    price: React.PropTypes.number.isRequired
  },

  getStyles () {
    return Object.assign({},
      this.props.chosen && styles.chosen
    );
  },

  handleClick () {
    this.props.onSelect(this.props.index);
  },

  render () {
    return (
      <div
       className="ServiceItem"
       onClick={this.handleClick}
       style={this.getStyles()}>
        <span className="ServiceItem_name">{this.props.name}</span>
        <span className="ServiceItem_price">${this.props.price}</span>
      </div>
    );
  }
});

export default ServiceItem;
