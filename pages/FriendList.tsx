import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getFriendList} from '../api/userApi';
import {getTokenState} from '../store/userReducer';

const FriendList = props => {
  const [filterIsOnline, setfilterIsOnline] = useState(true);
  const token = useSelector(getTokenState);

  useEffect(() => {
    const getFriendListProm = async () => {
      const res = await getFriendList({token, isOnline: filterIsOnline});
      console.log(res.data);
    };

    getFriendListProm();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{color: 'white', fontSize: 200}}>하윙</Text>
      <TouchableOpacity>
        <Text>테스팅</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FriendList;
