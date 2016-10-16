import React, {
  Component
} from 'react';

import {
  View,
  Text
} from 'react-native';

var ActionBar = require('./ActionBar');

class AddScene extends Component {
  render() {
    return (
      <View>
        <ActionBar title='Add scene' leftTitle='Back' rightTitle=''/>

        <View>
          <Text>This is add scene</Text>
        </View>
      </View>
    )
  }
}

module.exports = AddScene;
