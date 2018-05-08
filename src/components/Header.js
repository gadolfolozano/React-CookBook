import React, { Component } from 'react';

class Header extends Component {
  render() {

    const { textStyle, viewStyle } = styles;

    return (
        <header style={viewStyle}>
          <h1 style={textStyle}>{this.props.children}</h1>
        </header>
    );
  }
}

const styles = {
	viewStyle: {
		backgroundColor: '#f8f8f8',
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
	},

	textStyle: {
		fontSize: 40,
    marginTop: 0
	}
};

export default Header;
