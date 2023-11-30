import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity, Linking } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import { format } from 'date-fns';
import {
  CardDetailed,
  NameUser,
  UserName,
  ImageUser,
  DivInfo,
  DivUserInfo,
  Location,
  Place,
  UserFollowers,
  UserRepos,
  UserDetails,
  BoldText,
  RepoName,
  ReposCard,
  Column,
  RepoLanguage,
  RepoDescription,
  RepoCreated,
  RepoUpdate,
} from './style'

interface RepoData {
  id: number
  name: string
  html_url: string
  description?: string
  language: string
  created_at: string
  updated_at: string
}

interface DetailedCardProps {
  user: {
    id: number
    login: string
    name: string
    avatar_url: string
    location?: string
    bio: string
    followers: number
    public_repos: number
  }
  onClose: () => void
}

const DetailedCard: React.FC<DetailedCardProps> = ({ user, onClose }) => {
  const [repos, setRepos] = useState<RepoData[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user.login}/repos`,
        )

        if (response.status === 200) {
          setRepos(response.data)
          console.log(response.data)
        } else {
          console.error('Erro na requisição:', response.status)
        }
      } catch (error) {
        console.error('Erro na requisição:', error)
      }
    }

    fetchRepos()
  }, [user.login])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy'); 
  };

  return (
    <CardDetailed>
      <DivInfo>
        <ImageUser source={{ uri: user.avatar_url }} />
        <DivUserInfo>
          <NameUser>{user.name}</NameUser>
          <UserName>@{user.login}</UserName>
          <Place>
            <MaterialIcons name="place" size={20} color="black" />
            <Location>{user.location}</Location>
          </Place>
        </DivUserInfo>
      </DivInfo>
      <UserDetails>
        <Column>
          <UserFollowers>
            <BoldText>Followers:</BoldText> {user.followers}
          </UserFollowers>
          <UserRepos>
            <BoldText>Repositories:</BoldText> {user.public_repos}
          </UserRepos>
          <UserRepos>
            <BoldText>All {user.name} repositories:</BoldText>
            <FlatList
              data={repos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ReposCard key={item.id}>
                  <RepoName
                    onPress={() => {
                      Linking.openURL(item.html_url)
                    }}
                  >
                    {item.name}
                  </RepoName>
                  <RepoLanguage>{item.language}</RepoLanguage>
                  <RepoDescription>{item.description}</RepoDescription>
                  <RepoCreated>{formatDate(item.created_at)}</RepoCreated>
                  <RepoUpdate>{formatDate(item.updated_at)}</RepoUpdate>
                </ReposCard>
              )}
            />
          </UserRepos>
        </Column>
      </UserDetails>
    </CardDetailed>
  )
}

export default DetailedCard
