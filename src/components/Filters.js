import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox"/>Pastas
        </label>
        <br/>
        <label>
          <input type="checkbox"/>Salads
        </label>
        <br/>
        <label>
          <input type="checkbox"/>Meat
        </label>
        <br/>
        <label>
          <input type="checkbox"/>Desserts
        </label>
      </div>
  );
  }
}

export { Filters };
