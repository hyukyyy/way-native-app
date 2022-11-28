import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Header as HeaderRNE, Icon} from '@rneui/themed';
import Menu from './Menu';
import {Navigation} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getTokenState} from '../store/userReducer';
import {friendListSelector, getFriendListThunk} from '../store/friendReducer';
import {User} from '../data/types';

interface Props {
  componentId: string;
}

const Main = ({componentId}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(getTokenState);
  const friendList = useSelector(friendListSelector);

  useEffect(() => {
    const intervalId = setInterval(
      () => dispatch(getFriendListThunk({token: token, isOnline: true})),
      1000,
    );

    return () => clearInterval(intervalId);
  }, []);

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
    header: {
      padding: 10,
      backgroundColor: 'white',
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  const onSelectMenu = (componentRoute: string) => {
    console.log('componentId');
    console.log(componentId);
    console.log(componentRoute);
    Navigation.push(componentId, {
      component: {
        name: componentRoute,
        id: componentRoute,
        passProps: {},
        options: {},
      },
    });
  };

  return (
    <>
      <MapView
        style={{width: '100%', height: '100%', position: 'absolute'}}
        initialRegion={{
          latitude: 37.5244813,
          longitude: 127.0353667,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        zoomControlEnabled>
        {friendList.map((user: User) => {
          return (
            <Marker
              key={user.id}
              coordinate={{
                latitude: user.latitude,
                longitude: user.longitude,
              }}
            />
          );
        })}
      </MapView>
      <View style={[styles.background]}>
        <HeaderRNE
          backgroundColor="black"
          leftComponent={
            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
              <Icon type="material-community-icons" name="menu" color="white" />
            </TouchableOpacity>
          }
          rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <Icon name="description" color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Icon type="antdesign" name="rocket1" color="white" />
              </TouchableOpacity>
            </View>
          }
          centerComponent={{text: 'Way', style: styles.heading}}
        />
        {menuOpen && (
          <Menu componentId={componentId} onSelectMenu={onSelectMenu} />
        )}
      </View>
    </>
  );
};

export default Main;
