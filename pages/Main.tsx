import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

interface Props {
  componentId: string;
}

const Main = ({componentId}: Props) => {
  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    background: {
      width: width,
      height: height,
    },
    centerView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={[styles.background, styles.centerView]}>
      <Text>This is main page!</Text>
    </View>
  );
};

export default Main;
