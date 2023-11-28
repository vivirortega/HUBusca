import { StatusBar } from 'expo-status-bar';
import { Container, GetUser, SubTitle, Title } from './style';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto'
import React from 'react';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts ({Roboto_700Bold})


    if (!fontsLoaded){
      return null;
    }
  return (
    <Container>
      <Title>HUBusca</Title>
      <SubTitle>Procure um Usuário</SubTitle>
      <GetUser placeholder='Digite um user...'/>
      <StatusBar style="dark"  />
    </Container>
  );
}

export default App;
