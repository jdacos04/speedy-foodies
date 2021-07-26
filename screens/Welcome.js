import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text} from 'react-native'

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
} from './../components/styles';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Welcome = (Navigation) => {

  // const { name, email, photoUrl } = route.params.storedCredentials ? route.params.storedCredentials : route.params;

  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email, photoUrl } = storedCredentials;

  const AvatarImg = photoUrl
    ? {
        uri: photoUrl,
      }
    : require('./../assets/img/avatar.jpg');

  const clearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage   resizeMode="cover" source={require('./../assets/img/bg-w.png')} />

        <WelcomeContainer>
          <Text></Text>
          
          <PageTitle welcome={true}>Welcome!</PageTitle>
          <SubTitle welcome={true}>{name || 'Aqui deberia ir el nobre '}</SubTitle>
          <SubTitle welcome={true}>{email || 'aqui deberi ir el correo '}</SubTitle>

          <StyledFormArea>
          
            <StyledButton onPress={clearLogin}> 
              <ButtonText>Menu</ButtonText>
            </StyledButton>

            <Line />
            <StyledButton onPress={clearLogin}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
