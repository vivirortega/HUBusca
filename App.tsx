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
  UserBio, Test, Place
} from './style'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react'
import axios from 'axios'

interface UserData {
  id: number
  login: string
  name: string
  avatar_url: string
  location?: string
  bio: string
}

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({ Roboto_700Bold })
  const [username, setUsername] = useState<string>('')
  const [userData, setUserData] = useState<UserData[]>([])

  const searchUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      )

      if (response.status === 200) {
        setUserData([response.data])
        console.log(response.data.name)
      } else {
        console.error('Erro na requisição:', response.status)
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  const handleSearch = () => {
    searchUser()
    setUsername('');

  }

  if (!fontsLoaded) {
    return null
  }

  const renderItem = ({ item }: { item: UserData }) => {
    return (
      <Card>
        <UserInfo>
          <UserIcon source={{ uri: item.avatar_url }} />
          <Test>
          <NameUser>{item.name}</NameUser>
          <UserLogin>@{item.login}</UserLogin>
          </Test>
        </UserInfo>
        <Place>
        <MaterialIcons name="place" size={24} color="black" />
        <UserLocalization>{item.location}</UserLocalization>
        </Place>
        <UserBio>{item.bio}</UserBio>
      </Card>
    )
  }

  return (
    <Container>
      <Title>HUBusca</Title>
      <SubTitle>Procure um Usuário</SubTitle>
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
