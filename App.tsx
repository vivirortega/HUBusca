import { StatusBar } from 'expo-status-bar'
import {
  Card,
  Container,
  GetUser,
  UserIcon,
  NameUser,
  SubTitle,
  Title,
  UserLocalization,
  UserLogin,
  UserInfo,
  UserBio,
  Test,
  Place, ImgLogo
} from './style'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import axios from 'axios'
import DetailedCard from './src/DetailCard/DetailCard'

interface UserData {
  id: number
  login: string
  name: string
  avatar_url: string
  location?: string
  bio: string
  followers: number
  public_repos: number

  onClose: () => void;

}

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({ Roboto_700Bold })
  const [username, setUsername] = useState<string>('')
  const [userData, setUserData] = useState<UserData[]>([])
  const [openDetails, setOpenDetails] = useState<boolean>(false);


  const searchUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      )

      if (response.status === 200) {
        setUserData([response.data])
      } else {
        console.error('Erro na requisição:', response.status)
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  const openCardDetails = (item:object) => {
    setOpenDetails(true);
  };


  const handleSearch = () => {
    searchUser()
    setUsername('')
  }

  if (!fontsLoaded) {
    return null
  }

  const renderItem = ({ item }: { item: UserData }) => {
    return (
      <Card key={item.id}>
        <UserInfo>
        <TouchableOpacity onPress={() => openCardDetails(item)}>
          <UserIcon source={{ uri: item.avatar_url }} />
          </TouchableOpacity>
          <Test>
            <NameUser>{item.name}</NameUser>
            <UserLogin>@{item.login}</UserLogin>
          </Test>
        </UserInfo>
        <Place>
          <MaterialIcons name="place" size={20} color="black" />
          <UserLocalization>{item.location}</UserLocalization>
        </Place>
      </Card>
    )
  }

  return (
    <Container>
      <ImgLogo source={require('./assets/hubusca.png')} />
      <Title>HUBusca</Title>
      {openDetails && userData[0] && (
        <DetailedCard user={userData[0]} onClose={() => setOpenDetails(false)} />
      )}
      <SubTitle>Procure um Usuário no Github</SubTitle>
      <GetUser
        placeholder="Digite um user..."
        value={username}
        onChangeText={(text) => setUsername(text)}
        onSubmitEditing={handleSearch}
        
      />
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}

      />

      <StatusBar style="dark" />
    </Container>
  )
}

export default App
