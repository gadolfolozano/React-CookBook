import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div>
        <label>One
          <input type="checkbox"/>
        </label>

        <label>Two
          <input type="checkbox"/>
        </label>

        <label>Three
          <input type="checkbox"/>
        </label>

        <label>Four
          <input type="checkbox"/>
        </label>
      </div>
  );
  }
}

export { Filters };
