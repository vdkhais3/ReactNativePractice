import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

var ActionBar = require('./ActionBar');

class SecondScene extends Component {

	_backToFirstScene() {
		this.props.navigator.push({
			id: 'FirstScene'
		});
	}

	_rightPress() {
		//alert("Add press");
		this.props.navigator.push({
			id: 'AddScene'
		});
	}

	render() {
		return (
			<View>
				<ActionBar
					title='Second scene'
					rightTitle='Add'
					rightPress={this._rightPress.bind(this)}/>

				<View>
					<Text>
						This is second scene
					</Text>
					<TouchableHighlight onPress={this._backToFirstScene.bind(this)}>
						<Text>Back to first scene</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

module.exports = SecondScene;
