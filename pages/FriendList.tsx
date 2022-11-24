import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {TouchablePreview} from 'react-native-navigation/lib/dist/src/adapters/TouchablePreview';

const FriendList = props => {
  useEffect(() => {
    console.log('FriendList mount');
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{color: 'white', fontSize: 200}}>하윙</Text>
      <TouchableOpacity
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'com.way.Main',
              passProps: {},
              options: {},
            },
          })
        }>
        <Text>테스팅</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FriendList;
