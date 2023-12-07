import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './views/LoginScreen';
import HomeScreen from './views/HomeScreen';
import CreatePoolScreen from './views/createPoolScreen';
import YourPoolsScreen from './views/yourPoolsScreen';
import SignupScreen from './views/SignupScreen';
import {NativeRouter, Routes, Route} from "react-router-native";
import  { Account } from "./cognito/Account";

const App = () => {
  return (
    <Account>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/createPool" element={<CreatePoolScreen />} />
          <Route path="/yourPools" element={<YourPoolsScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </NativeRouter>
    </Account>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItem: {
    padding: 10
  }
});

export default App;
