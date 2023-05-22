import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

type DialogPopoverProps = {
  content: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const DialogPopover = ({
  content,
  open,
  onClose,
}: DialogPopoverProps) => {
  const handleDialogClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      PaperProps={{
        style: {
          overflow: 'hidden',
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {content}
      </DialogContent>
    </Dialog>
  );
};
