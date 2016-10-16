import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

var ActionBar = require('./ActionBar');

class FirstScene extends Component {

	_goToSecondScene() {
		this.props.navigator.push({
			id: 'SecondScene'
		});
	}

	_rightPress() {
		alert("Home press");
	}

	render() {
		return (
			<View>
				<ActionBar
					title='First scene'
					rightTitle='Home'
					rightPress={this._rightPress}/>

				<View>
					<Text>
						This is first scene
					</Text>
					<TouchableHighlight onPress={this._goToSecondScene.bind(this)}>
						<Text>
							Go to second scene
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

module.exports = FirstScene;
