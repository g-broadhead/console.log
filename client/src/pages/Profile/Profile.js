
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Container from '@mui/material/Container';

const Profile = (props) => {
  return (
    <>
      <AppHeader />
      <Container>
        <h3>Profile Page</h3>
        <p>Hello this is where all the content goes. Need to fill this with stuff!</p>
      </Container>
      <AppFooter />
    </>
  );
}

export default Profile;