import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import {Header as HeaderRNE, Icon} from '@rneui/themed';

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
  return (
    <>
      <MapView
        style={{width: '100%', height: '100%', position: 'absolute'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomControlEnabled
      />
      <View style={[styles.background]}>
        <HeaderRNE
          backgroundColor="black"
          leftComponent={
            <TouchableOpacity>
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
      </View>
    </>
  );
};

export default Main;
