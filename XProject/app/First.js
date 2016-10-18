import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight,
	TouchableWithoutFeedback,
	DatePickerAndroid,
	Slider,
	StyleSheet
} from 'react-native';

var dateFormat = require('dateformat');
//var ListPopover = require('react-native-list-popover');
var ActionBar = require('./ActionBar');

class FirstScene extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sliderValue1: 1,
			sliderValue2: 5,
			presetDate: new Date(2020, 4, 5),
			allDate: new Date(2020, 4, 5),
			simpleText: 'pick a date',
			//minText: 'pick a date, no earlier than today',
			//maxText: 'pick a date, no later than today',
			//presetText: 'pick a date, preset to 2020/5/5',
			//allText: 'pick a date between 2020/5/1 and 2020/5/10',
		};
	}

	_goToSecondScene() {
		this.props.navigator.push({
			id: 'SecondScene'
		});
	}

	_rightPress() {
		alert("Home press");
	}

	showPicker = async (stateKey, options) => {
		try {
			var newState = {};
			const {action, year, month, day} = await DatePickerAndroid.open(options);

			if (action === DatePickerAndroid.dismissedAction) {
				newState[stateKey + 'Text'] = 'dismissed';
			} else {
				var date = new Date(year, month, day);
				//newState[stateKey + 'Text'] = date.toLocaleDateString();
				newState[stateKey + 'Text'] = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
				newState[stateKey + 'Date'] = date;
			}

			this.setState(newState);
		} catch ({code, message}) {
			console.warn(`Error in example '${stateKey}': `, message);
		}
	 };

	render() {
		return (
			<View>
				<ActionBar
					title='First scene'
					rightTitle='Home'
					rightPress={this._rightPress}
				/>

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

				<View>
					<Slider
						minimumValue={1}
						maximumValue={31}
						step={1}
						{...this.props}
						onValueChange={(value) => this.setState({sliderValue1: value})}
					/>
					<Text>{this.state.sliderValue1}</Text>
				</View>

				<View>
					<Slider
						minimumValue={1}
						maximumValue={10}
						step={1}
						{...this.props}
						onValueChange={(value) => this.setState({sliderValue2: value})}
					/>
					<Text>{this.state.sliderValue2}</Text>
				</View>

				<View>
					<TouchableWithoutFeedback
						onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
						<View>
							<Text style={styles.text}>{this.state.simpleText}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	text: {
		color: 'black',
	},
});

module.exports = FirstScene;
