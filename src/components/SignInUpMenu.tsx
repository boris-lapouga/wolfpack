import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export const SignInUpMenu = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button onClick={onOpen}>
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
      </Button>
      <Typography>/</Typography>
      <Button onClick={onOpen}>
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
      </Button>
    </Box>
  );
};
