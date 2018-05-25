import React, { Component } from 'react';

class Header extends Component {
  render() {

    const { textStyle, viewStyle } = styles;

    return (
        <header style={viewStyle}>
          <h1 style={textStyle}>Holaaaaa</h1>
        </header>
    );
  }
}

const styles = {
	viewStyle: {
		backgroundColor: '#f8f8f8',
		paddingTop: 10,
		paddingBottom: 10
	},

	textStyle: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 20,
		textAlign: 'left',
    color: '#f0692f',
    cursive: true,
    fontSize: 30,
    fontWeight: 'normal'
	}
};

export { Header };
