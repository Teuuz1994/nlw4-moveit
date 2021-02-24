import { Container, Image, UserInformations, UserName, Level, LevelIcon } from './style';

const Profile = () => {
  return (
    <Container>
      <Image src="https://github.com/Teuuz1994.png" alt="avatar" />
      <UserInformations>
        <UserName>Matheus Campos</UserName>
        <Level>
          <LevelIcon src="icons/level.svg" alt="level"/>
          Level 1
        </Level>
      </UserInformations>
    </Container>
  )
};

export default Profile;
