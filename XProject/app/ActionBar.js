import React, {
  Component
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class ActionBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  static defaultProps = {
    title: '',
    leftTitle: 'Menu',
    rightTitle: 'Home',
    showLeftButton: true,
    showRightButton: true
  }

  render() {

    let leftButton = null;

    if (this.props.showLeftButton == true) {
      leftButton = (
        <TouchableHighlight onPress={this._leftPress}>
          <Text>{this.props.leftTitle}</Text>
        </TouchableHighlight>
      )
    }

    let rightButton = null;

    if (this.props.showRightButton == true) {
      rightButton = (
        <TouchableHighlight onPress={this.props.rightPress}>
          <Text>{this.props.rightTitle}</Text>
        </TouchableHighlight>
      )
    }

    return (
        <View style={styles.container}>
          {leftButton}
          <Text>{this.props.title}</Text>
          {rightButton}
        </View>
    )
  }

  _leftPress() {
    alert("Menu press");
  }
}

// ActionBar.defaultProps = {
//   showLeftButton: true,
//   showRightButton: true
// }

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  }
});

module.exports = ActionBar;
