import {Avatar, Header, Icon, ListItem} from '@rneui/base';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

interface Props {
  componentId: string;
}

const MyPage = (props: Props) => {
  return (
    <SafeAreaView>
      <Header
        backgroundColor="black"
        leftComponent={
          <TouchableOpacity onPress={() => Navigation.pop(props.componentId)}>
            <Icon
              type="material-community-icons"
              name="chevron-left"
              color="white"
            />
          </TouchableOpacity>
        }
        centerComponent={{text: '마이페이지', style: styles.headerText}}
      />
      <View style={[styles.row]}>
        <Avatar
          iconStyle={[styles.flex1]}
          source={require('../resources/img/이웃집개발자_thumbnail.jpg')}
        />
        <View style={[styles.flex3]}>
          <ListItem.Title>{'아이디'}</ListItem.Title>
          <ListItem.Title>{'전화번호'}</ListItem.Title>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex1: {
    flex: 1,
  },
  flex3: {
    flex: 3,
  },
});

export default MyPage;
