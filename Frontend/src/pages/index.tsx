import { useTheme, Theme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Page } from '../components/Page';
import { Controller } from '../components/Controller';
import { GesturePanel } from '../components/GesturePanel';

const Home = (): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <Page>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          border: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.primary.main,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.primary.main,
              }}
            >
              <Controller />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.primary.main,
              }}
            >
              <GesturePanel />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export default Home;
