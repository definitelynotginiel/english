import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import About from './screens/About';
import FiguresofSpeech from './screens/FiguresofSpeech';
import PartsofSpeech from './screens/PartsofSpeech';
import KindsofGrammar from './screens/KindsofGrammar';
import TypesofEssay from './screens/TypesofEssay';
import TypesofSentences from './screens/TypesofSentences';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
        <Stack.Screen name="FiguresofSpeech" component={FiguresofSpeech} options={{ headerShown: false }}/>
        <Stack.Screen name="PartsofSpeech" component={PartsofSpeech} options={{ headerShown: false }}/>
        <Stack.Screen name="KindsofGrammar" component={KindsofGrammar} options={{ headerShown: false }}/>
        <Stack.Screen name="TypesofEssay" component={TypesofEssay} options={{ headerShown: false }}/>
        <Stack.Screen name="TypesofSentences" component={TypesofSentences} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
