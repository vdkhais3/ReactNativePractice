import React, { Component } from 'React';
import { AppRegistry } from  'react-native';

import HelloWorld from './HelloWorld';
import Bananas from './Bananas';
import Greeting from './Greeting';
import Blink from './Blink';
import Style from './Style';
import { 
    FixedDimensionsBasics,
    FlexDimensionsBasics,
    FlexDirectionBasics,
    JustifyContentBasics,
    AlignItemsBasics
} from './Layout';
import {
    PizzaTranslator
} from './TextInput';
import {
    IScrolledDownAndWhatHappenedNextShockedMe
} from './ScrollView';
import {
    ListViewBasics
} from './ListView';

AppRegistry.registerComponent('XProject', () => ListViewBasics);