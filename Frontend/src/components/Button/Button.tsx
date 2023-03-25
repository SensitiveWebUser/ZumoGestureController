import { useTranslation } from 'react-i18next';
import { useTheme, Theme } from '@mui/material/styles';

import MUIButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Button = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}): JSX.Element => {
  const { t }: any = useTranslation();
  const theme: Theme = useTheme();

  return (
    <MUIButton
      variant="contained"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      }}
      onClick={onClick}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
        }}
        align="center"
      >
        {t(text)}
      </Typography>
    </MUIButton>
  );
};
