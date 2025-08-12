import { useAuth } from '../context/AuthContext';
import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome {user?.name}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          You are now signed in with your Google account.
        </Typography>
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
