var React = require('react');
var classnames = require('classnames');

var ServiceItem = React.createClass({
  propTypes: {
    chosen: React.PropTypes.bool,
    index: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    price: React.PropTypes.number.isRequired
  },

  getClassNames () {
    return classnames(
      'ServiceItem',
      this.props.chosen && 'isChosen'
    );
  },

  handleClick () {
    this.props.onSelect(this.props.index);
  },

  render () {
    return (
      <div
       className={this.getClassNames()}
       onClick={this.handleClick}>
        <span className="ServiceItem_name">{this.props.name}</span>
        <span className="ServiceItem_price">${this.props.price}</span>
      </div>
    );
  }
});

export default ServiceItem;
