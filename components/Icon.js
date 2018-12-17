import React, { Component } from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

class Icon extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fontLoaded: false
		}
	}

	async componentDidMount() {
		try {
			await Font.loadAsync({
				'materialicons': require('../assets/materialicons.ttf'),
			});
			this.setState({ fontLoaded: true });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		if (this.state.fontLoaded) {
			return (
				<Text style={[ this.props.style, {
					fontFamily: 'materialicons',
					textAlign: 'center'
				}]}>
					{this.props.icon}
				</Text>
			);
		} else {
			return null
		}
	}
}

export default Icon;