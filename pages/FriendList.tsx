import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '../data/types';
import {getTokenState} from '../store/userReducer';
import {Header as HeaderRNE, Icon} from '@rneui/themed';
import {ListItem} from '@rneui/base';
import {friendListSelector, getFriendListThunk} from '../store/friendReducer';
import {Navigation} from 'react-native-navigation';

const FriendList = props => {
  const friendList = useSelector(friendListSelector);

  const renderHeader = () => {
    return (
      <ListItem style={[]}>
        <ListItem.Content style={[styles.row, styles.flexAround]}>
          <ListItem.Title style={[styles.flex2, styles.flexCenter]}>
            <Text>이름</Text>
          </ListItem.Title>
          <ListItem.Title style={[styles.flex3, styles.flexCenter]}>
            <Text>번호</Text>
          </ListItem.Title>
          <ListItem.Title style={[styles.flex2, styles.flexCenter]}>
            <Text>성공</Text>
          </ListItem.Title>
          <ListItem.Title style={[styles.flex2, styles.flexCenter]}>
            <Text>지각</Text>
          </ListItem.Title>
          <ListItem.Title style={[styles.flex1, styles.flexCenter]}>
            <Text>접속</Text>
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  const renderList = (user: User) => {
    return (
      <ListItem key={user.id}>
        <ListItem.Content style={[styles.row, styles.flexAround]}>
          <ListItem.Title style={[styles.flex2, styles.flexCenter]}>
            {user.username ? user.username : '-'}
          </ListItem.Title>
          <ListItem.Subtitle style={[styles.flex3, styles.flexCenter]}>
            {user.phoneNo}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={[styles.flex2, styles.flexCenter]}>
            {user.successCnt}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={[styles.flex2, styles.flexCenter]}>
            {user.lateCnt}
          </ListItem.Subtitle>
          <ListItem.CheckBox
            style={[styles.flex1, styles.flexCenter]}
            checked={user.isOnline}>
            접속중
          </ListItem.CheckBox>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderRNE
        backgroundColor="black"
        leftComponent={
          <TouchableOpacity onPress={() => Navigation.pop(props.componentId)}>
            <Icon type="material-community-icons" name="chevron-left" color="white" />
          </TouchableOpacity>
        }
        centerComponent={{text: '친구목록', style: styles.headerText}}
      />

      {renderHeader()}

      <View style={[styles.listContainer, {padding: 10}]}>
        <ScrollView>
          {friendList.map((user: User) => {
            return renderList(user);
          })}
        </ScrollView>
        {/* TODO 왠지 모르겠는데 이거 렌더링이 안됨. 수정할 수 있으면 이걸로
        쓰는게 좋음. */}
        {/* <FlatList
          data={friendList}
          // renderItem={renderList}
          keyExtractor={user => user.id}
          refreshing={false}
          onRefresh={() => {}}
          onEndReached={() => {}}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 0,
    backgroundColor: Colors.white,
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flexAround: {
    justifyContent: 'space-around',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FriendList;
