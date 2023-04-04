import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme, Theme } from '@mui/material/styles';

import { SocketContext } from '../../context/socket';
import { Socket } from 'socket.io-client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Button } from '../Button';

enum Movement {
  Forward = 'FORWARD',
  Backward = 'BACKWARD',
  Left = 'LEFT',
  Right = 'RIGHT',
  STOP = 'STOP',
  ACCELERATE = 'ACCELERATE',
  DECELERATE = 'DECELERATE',
}

export const Controller = (): JSX.Element => {
  const { t }: any = useTranslation();
  const theme: Theme = useTheme();
  const socket: Socket = useContext(SocketContext);

  const handleMovement = (movement: Movement): void => {
    socket.emit('movement', movement as string);
  };

  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 2,
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                }}
              >
                {t('components.controller.title')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                {t('components.controller.subtitle')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.forwards"
                      onClick={(): void => handleMovement(Movement.Forward)}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.left"
                      onClick={(): void => handleMovement(Movement.Left)}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.right"
                      onClick={(): void => handleMovement(Movement.Right)}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.backwards"
                      onClick={(): void => handleMovement(Movement.Backward)}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
