import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const MenuButton = styled(Box)({
  width: 24,
  height: 16,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const MenuLine = styled(Box)({
  height: 2,
  background: 'currentColor',
});

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const GroupCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid #e0e0e0',
  borderRadius: 4,
  marginBottom: theme.spacing(2),
}));

const HowItWorks = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CircleIcon = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: 'white',
  border: '3px solid lightgrey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const IndexPage: React.FC = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Header>
        <Link href="/" passHref legacyBehavior>
          <Typography
            variant="h6"
            component="a"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            ThePack
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/sign-in" passHref legacyBehavior>
            <Typography
              component="a"
              sx={{
                marginRight: 2,
                cursor: 'pointer',
                color: 'text.primary',
                textDecoration: 'none',
              }}
            >
              Sign in
            </Typography>
          </Link>
          <Typography>/</Typography>
          <Link href="/sign-up" passHref legacyBehavior>
            <Typography
              component="a"
              sx={{
                marginLeft: 2,
                marginRight: 4,
                cursor: 'pointer',
                color: 'text.primary',
                textDecoration: 'none',
              }}
            >
              Sign Up
            </Typography>
          </Link>
          <MenuButton>
            {Array.from({ length: 4 }).map((_, index) => (
              <MenuLine key={index} />
            ))}
          </MenuButton>
        </Box>
      </Header>
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          minHeight: 'calc(100vh - 60px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          A WOLF IS ALWAYS STRONGER IN A PACK
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          fontWeight="bold"
        >
          FIND YOURS
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 3,
              width: '100%',
              height: '60px',
            }}
          >
            <TextField
              label=""
              variant="outlined"
              placeholder="Find a pack to join... (or create one)"
              fullWidth
              sx={{ flexGrow: 1, mr: 1, height: '60px' }}
            />
            <Box
              sx={{
                width: '60px',
                height: '60px',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <SearchIcon sx={{ color: 'white' }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="subtitle1" color="textSecondary">
            Search By Category
          </Typography>
          {[
            'Psychology',
            'Gaming',
            'Movies',
            'StartUps',
            'Fishing',
            'Music',
            'Sports',
            'Partying',
            'Friendship',
            'Misc',
          ].map((category, index) => (
            <Chip
              key={index}
              label={category}
              component="a"
              href={`/category/${category.toLowerCase()}`}
              sx={{
                m: 0.5,
                backgroundColor: 'lightgrey',
                color: '#ffffff',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            />
          ))}

          <Link href="/groups" passHref legacyBehavior>
            <Typography
              component="a"
              sx={{
                textDecoration: 'none',
                color: 'text.secondary',
                cursor: 'pointer',
                display: 'block',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Show all
            </Typography>
          </Link>
        </Box>
        <HowItWorks>
          <CircleIcon>
            <Link href="/how-it-works" passHref legacyBehavior>
              <IconButton>
                <PlayArrowIcon color="action" fontSize="large" />
              </IconButton>
            </Link>
          </CircleIcon>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ color: 'text.secondary' }}
          >
            How It Works
          </Typography>
        </HowItWorks>
      </Container>
    </Container>
  );
};

export default IndexPage;
