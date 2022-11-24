import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {menu} from '../common/codeUtils';

interface Props {
  item: menu;
  componentId: string;
  onSelectMenu: Function;
}
const MenuItem = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.menuItemContainer]}
      onPress={() => {
        props.onSelectMenu(props.item.componentRoute);
      }}>
      <Text style={[styles.whitebold]}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderBottomColor: '#c0c0c0',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  whitebold: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MenuItem;
