import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>{this.props.defaultReducer}</div>
		)
	}
}

export default connect(
	state => state,
	dispatch => ({})
)(App);