import React, {useContext} from "react";
import styled from "styled-components";
import BodyContainer from "../../components/BodyContainer";
import {SmallButton} from "../../components/Buttons";
import Input from "../../components/Input";
import {InputColumnContainer} from "../../components/InputColumnContainer";
import {
    Subtitle,
    Title
} from "../../components/Titles";
import {AuthContext} from "../../firebase/AuthContext";
import firebaseApp from "../../firebase/FirebaseConfig";

const Profile = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <BodyContainer>
            <Title>Profile</Title>
            <UserInfoContainer>
                <UserNameAndUidContainer>
                    <Userpic/>
                    <div>
                        <UserNameAndLastName>{'Aleksey Shevtsov'}</UserNameAndLastName>
                        <UserUid>{currentUser.uid}</UserUid>
                    </div>
                </UserNameAndUidContainer>
                <InputColumnContainer>
                    <Input title={'Email'} type={'email'} value={currentUser.email} error={''}/>
                    <Input title={'Registration date'} type={'text'} value={'24.04.2022'} error={''}/>
                </InputColumnContainer>
                <div>
                    <SmallButton onClick={() => firebaseApp.auth().signOut()}>SigOut</SmallButton>
                    <SmallButton>Change password</SmallButton>
                </div>
                <Subtitle>Sessions</Subtitle>
            </UserInfoContainer>
        </BodyContainer>
    )
}
const UserInfoColumn = styled.div`
  margin-top: 2em;
max-width: 320px;
  display: flex;
flex-direction: column;
gap: 1em`

const UserInfoContainer = styled.div`
margin-top: 1em
`
const UserNameAndUidContainer = styled.div`
  justify-items: center;
  align-items: center;
  display: flex;
  gap: 1em`

const UserNameAndLastName = styled.h6`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
`
const UserUid = styled.p`
  margin: 0;
font-size: 12px;
color: dimgrey`

const Userpic = styled.div`
height: 56px;
width: 56px;
border-radius: 44px;
background: mediumslateblue`
export default Profile;
