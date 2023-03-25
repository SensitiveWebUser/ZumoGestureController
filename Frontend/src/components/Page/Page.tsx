import Box from '@mui/material/Box';

interface PageProps {
  children: JSX.Element;
}

export const Page = ({ children }: PageProps): JSX.Element => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Box m={2}>{children}</Box>
  </Box>
);
