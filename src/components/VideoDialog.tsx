import React from 'react';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export function VideoDialog({ onClose }: { onClose: () => void }) {
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
      <div
        style={{
          position: 'relative',
        }}
      >
        <iframe
          title="video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/R85Kw8Z8heo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '480px',
            height: '260px',
            margin: '20px',
          }}
        />
      </div>
    </React.Fragment>
  );
}
