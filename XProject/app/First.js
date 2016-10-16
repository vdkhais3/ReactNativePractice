import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

class FirstScene extends Component {

	_goToSecondScene() {
		this.props.navigator.push({
			id: 'SecondScene'
		});
	}

	render() {
		return (
			<View>
				<Text>
					This is first scene
				</Text>
				<TouchableHighlight onPress={this._goToSecondScene.bind(this)}>
					<Text>Go to second scene</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

module.exports = FirstScene;