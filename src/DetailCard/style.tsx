import styled from 'styled-components/native'

export const CardDetailed = styled.View`
  width: 330px;
  height: 430px;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  margin-top: 20px;
`

export const NameUser = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export const UserName = styled.Text`
  font-size: 15px;
  font-weight: 400;
`
export const ImageUser = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  margin-top: 20px;
  margin-left: 20px;
`

export const DivInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const DivUserInfo = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Location = styled.Text`
  font-size: 13px;
  color: #687178;

`

export const Place = styled.View`
 display: flex;
 align-items: center;
 flex-direction: row;
 margin-top: 3px;
`

export const UserFollowers = styled.Text`
   font-size: 15px;

`

export const UserRepos = styled.Text`
    font-size: 15px;

`