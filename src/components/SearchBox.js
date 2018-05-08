import React, { Component } from 'react';

class SearchBox extends Component {
  render() {

    const { inputStyle } = styles;

    return (
        <input style={inputStyle} placeholder="Buscar"/>
    );
  }
}

const styles = {
	inputStyle: {
    display: 'inline-block',
    boxSizing: 'content-box',
    borderRadius: 3,
		borderWidth: 1,
		borderColor: '#b7b7b7',
    paddingLeft: 10,
    paddingRight: 10
	}
};

export { SearchBox };
