import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    h1: {
      fontSize: '1.7rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.2rem',
    },
    body1: {
      fontSize: '1.0rem',
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#15a3bf',
    },
    secondary: {
      main: '#24252a',
    },
    error: {
      main: '#FF3B00',
    },
    background: {
      default: '#24252a',
      paper: '#33343b',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#2b2b2b',
            width: 8,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: '#6b6b6b',
            minHeight: 24,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          transition: 0.1,
          '&:hover': {
            color: 'salmon',
            transition: 0.1,
          },
          '&.Mui-active': {
            color: 'salmon',
          },
        },
        icon: {
          '& path': {
            fill: '#eee',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#fff',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&::after': {
            borderBottomColor: '#fff',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
        notchedOutline: {
          borderColor: 'white',
        },
        input: {
          '&.Mui-disabled': {
            WebkitTextFillColor: 'white',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&.MuiInput-underline::before': {
            borderBottomColor: 'rgba(255,255,255,0.3)',
          },
          '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'rgba(255,255,255,0.5)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&.MuiInput-input': {
            color: 'white',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white',
          },
          '&.Mui-disabled': {
            color: 'white',
          },
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#ADADAD',
          },
        },
      },
    },
  },
});
