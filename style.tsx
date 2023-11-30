import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #2c2c2c;
`
export const Title = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
`
export const GetUser = styled.TextInput`
  height: 50px;
  border-radius: 10px;
  width: 80%;
  margin: 5%;
  background-color: #d9d9d9;
  text-align: start;
  padding: 10px;
`

export const SubTitle =  styled.Text`
  font-size: 20px;
  color: #ffffff;
  margin-top: 10%;
  

`

export const Card = styled.View`
  width: 330px;
  height: 100px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 8px;
`

export const NameUser = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
`

export const UserLogin = styled.Text`
  font-size: 15px;
  color: black;
`

export const UserIcon = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin-left: 15px;
`
export const Test = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 2px;
`
export const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-top: 10px;
`
export const UserLocalization = styled.Text`
  font-size: 13px;
  color: #687178;
`
export const UserBio = styled.Text`
  font-size: 12px;
  color: #687178;
  margin-left: 20px;
`

export const SearchButton = styled.Button`
  width: 40px;
  height: 30px;
  background-color: white;
`
export const Place = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 78px;
  padding-bottom: 10px;
`

export const ImgLogo = styled.Image`
  margin-top: 25%;
`
