import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" align="center">
        {t('pages.home.title')}
      </Typography>
    </Box>
  );
};

export default Home;
