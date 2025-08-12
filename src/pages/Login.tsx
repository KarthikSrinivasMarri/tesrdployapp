import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { Container, Box, Typography } from '@mui/material';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const { login } = useAuth();

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome
        </Typography>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log('Response received:', credentialResponse);
            if (credentialResponse.credential) {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log('Decoded token:', decoded);
              login(decoded);
            }
          }}
          onError={() => {
            console.error('Login Failed - Please check if:', [
              '1. Your email is added as a test user in Google Cloud Console',
              '2. The correct origin is authorized',
              `3. Client ID ${import.meta.env.VITE_GOOGLE_CLIENT_ID} is correct`,
              '4. Required APIs are enabled in Google Cloud Console'
            ]);
          }}
          useOneTap
          auto_select
          theme="filled_black"
        />
      </Box>
    </Container>
  );
};

export default Login;
