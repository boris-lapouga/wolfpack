import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { DiscordLogo } from './DiscordLogo';

export const SignInUpDialog = ({ onClose }: { onClose: () => void }) => {
  const handleDiscordLogin = () => {
    console.log(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${process.env.NEXT_PUBLIC_AUTH_URI}`
    );
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}${process.env.NEXT_PUBLIC_AUTH_URI}`;
  };

  return (
    <React.Fragment>
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Sign In / Sign Up
        </Typography>
        <Button
          onClick={handleDiscordLogin}
          variant="outlined"
          startIcon={<DiscordLogo width={32} height={32} />}
          sx={{
            marginBottom: 1,
            padding: '12px 24px',
            fontSize: '1.2rem',
            borderColor: 'text.primary',
            color: 'text.primary',
          }}
        >
          Sign In With Discord
        </Button>
        <Button
          onClick={() =>
            window.open(process.env.NEXT_PUBLIC_DISCORD_REGISTER, '_blank')
          }
          variant="contained"
          startIcon={<DiscordLogo width={32} height={32} />}
          sx={{
            backgroundColor: 'text.primary',
            color: 'background.paper',
            padding: '12px 24px',
            fontSize: '1.2rem',
          }}
        >
          Create a Discord Account
        </Button>
      </Box>
    </React.Fragment>
  );
};
