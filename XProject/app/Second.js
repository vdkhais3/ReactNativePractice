import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

class SecondScene extends Component {

	_backToFirstScene() {
		this.props.navigator.push({
			id: 'FirstScene'
		});
	}

	render() {
		return (
			<View>
				<Text>
					This is second scene
				</Text>
				<TouchableHighlight onPress={this._backToFirstScene.bind(this)}>
					<Text>Back to first scene</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

module.exports = SecondScene;