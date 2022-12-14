import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id, test, value, checked, onChange, title } = this.props;
    return (
      <label htmlFor={ id }>
        { title }
        <input
          type={ type }
          id={ id }
          data-testid={ test }
          name={ id }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  value: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Input.defaultProps = {
  value: '',
  checked: false,
};

export default Input;
