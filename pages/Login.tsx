import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getTokenState, loginThunk} from '../store/userReducer';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

interface Props {
  componentId: string;
}
interface State {}

const Login = ({componentId}: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const token = useSelector(getTokenState);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginThunk({username, password}));
  };

  const setMainCompRoot = () => {
    Navigation.setRoot({
      root: {
        component: {name: 'com.way.Main', passProps: {}},
      },
    });
  };

  useEffect(() => {
    if ('' != token) {
      setMainCompRoot();
    }
  }, [token]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.backgroundView}>
          <Text>Login</Text>
          <TextInput
            placeholder="아이디를 입력해주세요."
            value={username}
            onChangeText={value => {
              setUsername(value);
            }}
            style={styles.inputs}
          />
          <TextInput
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            style={styles.inputs}
          />
          <TouchableOpacity onPress={() => handleLogin()}>
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert(token)}>
            <Text>show token</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    display: 'flex',
    fleX: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '50%',
  },
});

export default Login;
