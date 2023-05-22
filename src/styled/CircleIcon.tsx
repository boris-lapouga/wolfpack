import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/system';
import { ReactNode } from 'react';

interface CircleIconProps extends BoxProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  borderColor?: string;
  borderSize?: number | string;
  children?: ReactNode;
}

const StyledCircleIcon = styled(Box)(({ theme }) => ({
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '.5em',
  marginBottom: theme.spacing(1),
}));

export const CircleIcon: React.FC<CircleIconProps> = ({
  width = 64,
  height = 64,
  borderRadius = '50%',
  borderColor = 'lightgrey',
  borderSize = '3px',
  children,
  ...props
}) => {
  return (
    <StyledCircleIcon
      {...props}
      sx={{
        width,
        height,
        borderRadius,
        border: `${borderSize} solid ${borderColor}`,
      }}
    >
      {children}
    </StyledCircleIcon>
  );
};
