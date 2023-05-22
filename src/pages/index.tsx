import React from 'react';
import { Container, Typography, Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Drawer from '@mui/material/Drawer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SignInUpMenu } from '@/components/SignInUpMenu';
import { DialogPopover } from '@/components/DialogPopover';
import { VideoDialog } from '@/components/VideoDialog';
import { SignInUpDialog } from '@/components/SignInUpDialog';
import { SidebarMenu } from '@/components/SidebarMenu';
import { CircleIcon } from '@/styled/CircleIcon';
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

const HowItWorks = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const IndexPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = React.useState(false);
  const [signInUpDialogOpen, setSignInUpDialogOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleVideoDialogOpen = () => {
    setVideoDialogOpen(true);
  };

  const handleVideoDialogClose = () => {
    setVideoDialogOpen(false);
  };

  const handleSignInUpDialogOpen = () => {
    setSignInUpDialogOpen(true);
  };

  const handleSignInUpDialogClose = () => {
    setSignInUpDialogOpen(false);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Header>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <SignInUpMenu onOpen={handleSignInUpDialogOpen} />
          </Box>
          <MenuButton onClick={handleDrawerToggle} sx={{ cursor: 'pointer' }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <MenuLine key={index} />
            ))}
          </MenuButton>
        </Box>
      </Header>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <IconButton onClick={closeDrawer}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          <SidebarMenu handleSignInUpDialogOpen={handleSignInUpDialogOpen} />
        </Box>
      </Drawer>
      <DialogPopover
        content={<VideoDialog onClose={handleVideoDialogClose} />}
        open={videoDialogOpen}
        onClose={handleVideoDialogClose}
      />
      <DialogPopover
        content={<SignInUpDialog onClose={handleSignInUpDialogClose} />}
        open={signInUpDialogOpen}
        onClose={handleSignInUpDialogClose}
      />
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
            <IconButton onClick={handleVideoDialogOpen}>
              <PlayArrowIcon
                color="action"
                fontSize="large"
                sx={{ cursor: 'pointer' }}
              />
            </IconButton>
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
