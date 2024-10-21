import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function Login({ navigation }) {
  const [loaded] = useFonts({
    'FredokaOne-Regular': require('../assets/fonts/FredokaOne-Regular.ttf'),
    'Inter': require('../assets/fonts/Inter.ttf'),
  });
  
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true); // Toggle state for password visibility

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/bg image.png')}
        style={styles.imageBackground}>
        <Text style={styles.texteng}>ENGLISH</Text>
        <Image
          source={require('../assets/book logo.png')}
          style={{
            width: 220,
            height: 228,
            alignSelf: 'center',
            marginBottom: 40,
          }}
        />
        <View style={styles.box}>
          <View style={styles.loginform}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.textinput} />

            <Image source={require('../assets/human icon.png')} style={{ position: 'absolute', right: 65, top: 77 }} />

            <Text style={styles.text}>Password</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                style={[styles.textinput,  ]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={hidePassword} // Hide or show password
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Image
                  source={hidePassword
                    ? require('../assets/eye-open.png')  // Change icon when password is hidden
                    : require('../assets/eye-closed.png')  // Change icon when password is visible
                  }
                  style={styles.passwordIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.btntxt}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#1A00FF', textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'semibold' }}>Forgot Password?</Text>
          <Text style={{ color: '#ffffff', textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Don't have an account?
            <Text style={styles.signup}>   Sign up</Text></Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#445DAA',
    flexDirection: 'column-reverse',
  },
  texteng: {
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 100,
    fontSize: 60,
    color: '#ffffff',
    fontFamily: 'FredokaOne-Regular',
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 9 },
    textShadowRadius: 6,
  },
  box: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#B6CCD8',
    width: '100%',
    height: '45%',
    shadowColor: '#00000040',
    shadowOffset: { x: 0, y: -6 },
    shadowRadius: 4,
  },
  text: {
    textAlign: 'left',
    marginLeft: 50,
    fontSize: 20,
    color: 'white',
    fontFamily: 'FredokaOne-Regular',
    marginBottom: 5,
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  textinput: {
    justifyContent: 'center',
    marginLeft: 50,
    fontSize: 20,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 15,
    shadowColor: '#000000',
    shadowRadius: 4,
    elevation: 6,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: 'FredokaOne-Regular',
  },
  loginform: {
    paddingTop: 40,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#313D44',
    width: 148,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 7,
    marginBottom: 5,
    marginTop: 10,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 6 },
  },
  btntxt: {
    color: '#F2F2F2',
    fontSize: 19,
    fontFamily: 'FredokaOne-Regular',
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 4,
  },
  imageBackground: {
    flex: 1.5,
    justifyContent: 'flex-end',
    width: '100%',
    height: '80%',
  },
  signup: {
    color: '#1A00FF',
    fontFamily: 'Inter',
    fontWeight: 'semibold',
  },
  passwordIcon: {
    position: 'absolute',
    right: 7.5,
    top: -20,
  },
});
