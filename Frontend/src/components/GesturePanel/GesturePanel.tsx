import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme, Theme } from '@mui/material/styles';

import { SocketContext } from '../../context/socket';
import { Socket } from 'socket.io-client';

import { Gestures } from '../../configs/gestures';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export const GesturePanel = (): JSX.Element => {
  const { t }: any = useTranslation();
  const theme: Theme = useTheme();
  const socket: Socket = useContext(SocketContext);

  // Gesture state
  const [gesture, setGesture] = useState<string>('idle');
  const [isMoving, setIsMoving] = useState<boolean>(false);

  // When the server emits a gesture event, update the gesture state
  socket.on(
    'gesture',
    (incomingGesture: { gesture: string; isMoving: boolean }): void => {
      if (gesture !== incomingGesture.gesture)
        setGesture(incomingGesture.gesture);
      if (isMoving !== incomingGesture.isMoving)
        setIsMoving(incomingGesture.isMoving);
    }
  );

  // Every 1 second, emit a gesture event to the server
  useEffect(() => {
    const interval: NodeJS.Timer = setInterval((): void => {
      socket.emit('gesture');
    }, 1000);
    return (): void => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {t('components.gesturePanel.title')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                {t('components.gesturePanel.subtitle')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {Gestures[gesture] && (
                    <Box>
                      <Box
                        m={1}
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {Gestures[gesture].asset}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 'bold',
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {t(
                          `components.gesturePanel.gestures.${Gestures[gesture].name}`
                        )}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 'bold',
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {t(
                          isMoving
                            ? 'components.gesturePanel.active'
                            : 'components.gesturePanel.inactive'
                        )}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
