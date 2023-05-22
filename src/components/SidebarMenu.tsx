import React from 'react';
import { List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import Link from 'next/link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import { CircleIcon } from '@/styled/CircleIcon';
import { SignInUpMenu } from './SignInUpMenu';

export const SidebarMenu = ({ handleSignInUpDialogOpen}: any) => {
  return (
    <Box sx={{ width: 250, paddingTop: 2 }}>
      <SignInUpMenu onOpen={handleSignInUpDialogOpen} />
      <List>
        <ListItem component={Link} href="/browse-packs">
          <ListItemText primary="Browse Packs" />
        </ListItem>
        <ListItem component={Link} href="/create-pack">
          <ListItemText primary="Create a Pack" />
        </ListItem>
        <ListItem component={Link} href="/how-it-works">
          <Box display="flex" alignItems="center">
            <ListItemText primary="How it Works" sx={{ mr: 1 }} />
            <CircleIcon
              width={16}
              height={16}
              borderColor="black"
              borderSize="1px"
            >
              <IconButton sx={{ padding: 0 }}>
                <PlayArrowIcon
                  color="action"
                  fontSize="small"
                  sx={{
                    cursor: 'pointer',
                    fontSize: '1rem',
                    color: 'black',
                  }}
                />
              </IconButton>
            </CircleIcon>
          </Box>
        </ListItem>

        <ListItem component={Link} href="/about">
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
      <Box sx={{ marginTop: 3 }}>
        <ListItem component={Link} href="/terms-of-use">
          <ListItemText primary="Terms of Use" />
        </ListItem>
        <ListItem component={Link} href="/privacy-policy">
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </Box>
    </Box>
  );
};
