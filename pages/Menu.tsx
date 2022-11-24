import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {allMenus} from '../common/codeUtils';
import MenuItem from '../components/MenuItem';

interface Props {
  componentId: string;
  onSelectMenu: Function;
}

const Menu = (props: Props) => {
  return (
    <View style={[styles.menuContainer]}>
      {allMenus.map(menu => (
        <MenuItem key={menu.name} item={menu} onSelectMenu={props.onSelectMenu} componentId={props.componentId} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '60%',
    height: '100%',
    backgroundColor: 'black',
  },
});

export default Menu;
