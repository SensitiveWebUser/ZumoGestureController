import { useTranslation } from 'react-i18next';
import { useTheme, Theme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ErrorIcon from '@mui/icons-material/Error';

const NotFound = (): JSX.Element => {
  const { t }: any = useTranslation();
  const theme: Theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '80vh' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{ color: theme.palette.text.primary }}
            variant="h1"
            align="center"
          >
            {t('pages.notFound.title')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} mx={1}>
            <ErrorIcon />
          </Box>
          <Typography
            sx={{ color: theme.palette.text.primary }}
            variant="h3"
            align="center"
          >
            {t('pages.notFound.description')}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default NotFound;
