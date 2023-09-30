import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.initialValue || 0,
      };
    }
  
    handleIncrement = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
  
    handleDecrement = () => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    };
  
    render() {
      return React.createElement(
        'div',
        null,
        React.createElement('p', null, `Count: ${this.state.count}`),
        React.createElement(
          'button',
          { onClick: this.handleDecrement },
          'Decrement'
        ),
        React.createElement(
          'button',
          { onClick: this.handleIncrement },
          'Increment'
        )
      );
    }
}
  
export default Counter;

Counter.propTypes = {
  initialValue: PropTypes.number,
};

Counter.defaultProps = {
  initialValue: 0,
};