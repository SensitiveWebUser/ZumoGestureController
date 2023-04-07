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

const Movement = {
  Forward: {
    horizontal: 0,
    vertical: -1,
  } as Imove,
  Backward: {
    horizontal: 0,
    vertical: 1,
  } as Imove,
  Left: {
    horizontal: -1,
    vertical: 0,
  } as Imove,
  Right: {
    horizontal: 1,
    vertical: 0,
  } as Imove,
};

interface Imove {
  horizontal: number;
  vertical: number;
}

export const Controller = (): JSX.Element => {
  const { t }: any = useTranslation();
  const theme: Theme = useTheme();
  const socket: Socket = useContext(SocketContext);

  const handleMovement = (movement: Imove): void => {
    socket.emit('movement', movement);
  };

  const handleSpeed = (speed: number): void => {
    socket.emit('speed', speed);
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
          <Grid item xs={12} mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.speedDown"
                      onClick={(): void => handleSpeed(-1)}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.stop"
                      onClick={(): void => handleSpeed(0)}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box width={'100%'} alignItems="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      text="components.controller.speedUp"
                      onClick={(): void => handleSpeed(1)}
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
