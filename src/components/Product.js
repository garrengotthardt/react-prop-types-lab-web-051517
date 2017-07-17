// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  render(){
    return(
      <div className="product">
        <p className="name">Name: {this.props.name}</p>
        <p className="producer">Producer: {this.props.producer}</p>
        <p className="hasWatermark">Watermark? {this.props.hasWatermark}</p>
        <p className="color">Color: {this.props.color}</p>
        <p className="weight">Weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color:  PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    if (props[propName] === undefined ) {
      return new Error(
        'The `weight` prop is required.'
      );
    } else if (isNaN(props[propName])) {
      return new Error(
        'The `weight` prop is not a number.'
      );
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error(
        'The `weight` prop should range between 80 and 300.'
      );
    }
  }
};
