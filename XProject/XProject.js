import React, { 
	Component 
} from 'react';

import {
	View,
	Text,
	Navigator
} from 'react-native';

// import HelloWorld from './HelloWorld';
// import Bananas from './Bananas';
// import Greeting from './Greeting';
// import Blink from './Blink';
// import Style from './Style';
// import { 
//     FixedDimensionsBasics,
//     FlexDimensionsBasics,
//     FlexDirectionBasics,
//     JustifyContentBasics,
//     AlignItemsBasics
// } from './Layout';
// import {
//     PizzaTranslator
// } from './TextInput';
// import {
//     IScrolledDownAndWhatHappenedNextShockedMe
// } from './ScrollView';
// import {
//     ListViewBasics
// } from './ListView';

//import SimpleNavigation from './SimpleNavigation';

var FirstScene = require('./app/First');
var SecondScene = require('./app/Second');

export default class XProject extends Component {
  	render() {
	  	return (
		    <Navigator
		    	initialRoute = {
		    		{
		    			id: 'FirstScene'
		    		}
		    	}

		    	renderScene = {
		    		this._navigatorRenderScene
		    	}

		    	configureScene = {(route, routeStack) => 
		    		//Navigator.SceneConfigs.FloatFromBottom
		    		Navigator.SceneConfigs.FadeAndroid
		    	}
		    />
  		);
	}

	_navigatorRenderScene(route, navigator) {

		switch (route.id) {
			case 'FirstScene':
				return (
					<FirstScene navigator={navigator}/>
				)
			case 'SecondScene':
				return (
					<SecondScene navigator={navigator}/>
				)
		}
	}
}