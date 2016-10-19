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
	Picker,
	StyleSheet
} from 'react-native';

var dateFormat = require('dateformat');
//var ListPopover = require('react-native-list-popover');
var ActionBar = require('./ActionBar');

var PickerItem = Picker.Item;
var CAR_MAKES_AND_MODELS = {
	amc: {
		name: 'AMC',
		models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
	},
 	alfa: {
		 name: 'Alfa-Romeo',
		 models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
 	},
 	aston: {
		name: 'Aston Martin',
		models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
	},
	audi: {
		name: 'Audi',
		models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
	},
	austin: {
		name: 'Austin',
		models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
	},
	borgward: {
		name: 'Borgward',
		models: ['Hansa', 'Isabella', 'P100'],
	},
	buick: {
		name: 'Buick',
		models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal', 'Roadmaster', 'Skylark'],
	},
	cadillac: {
		name: 'Cadillac',
		models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
	},
	chevrolet: {
		name: 'Chevrolet',
		models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle', 'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
	},
};

class FirstScene extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sliderValue1: 1,
			sliderValue2: 1,
			presetDate: new Date(2020, 4, 5),
			allDate: new Date(2020, 4, 5),
			simpleText: 'pick a date',
			//minText: 'pick a date, no earlier than today',
			//maxText: 'pick a date, no later than today',
			//presetText: 'pick a date, preset to 2020/5/5',
			//allText: 'pick a date between 2020/5/1 and 2020/5/10',
			carMake: 'cadillac',
			modelIndex: 3
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
		var make = CAR_MAKES_AND_MODELS[this.state.carMake];
		var selectionString = make.name + ' ' + make.models[this.state.modelIndex];

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

				<View
					style={{
						margin: 20,
						borderWidth: 1,
						borderColor: 'lightgray',
						backgroundColor: 'white',
						borderRadius: 10
					}}>
					<Picker
						mode='dropdown'
						selectedValue={this.state.carMake}
						onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
						{
							Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
								<PickerItem
									key={carMake}
									value={carMake}
									label={CAR_MAKES_AND_MODELS[carMake].name}
									/>
							))
						}
					</Picker>
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
