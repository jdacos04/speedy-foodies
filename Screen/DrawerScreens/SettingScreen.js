// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View,Image, Text,ScrollView, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View>
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/hpEfWyx4W2dGU4kPbz/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/9DgxhWOxHDHtF8bvwl/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/2pGvpSk1wEooM/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/YnkMcHgNIMW4Yfmjxr/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/DKCNQcgbdekrC/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/joYf3Ba2phD15ch9Nt/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/uTAFTGP3B4QvUoOikX/giphy.gif',
        }} />
      </View>
      </ScrollView>
          <Text 
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Memescitos para bajar el estres
          </Text>
        
    </SafeAreaView>
  );
};


export default SettingsScreen;
