import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
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
} from './style'
import { MaterialIcons } from '@expo/vector-icons'

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

      <UserFollowers>Followers: {user.followers}</UserFollowers>
      <UserRepos>Repositories: {user.public_repos}</UserRepos>
    </CardDetailed>
  )
}

export default DetailedCard
