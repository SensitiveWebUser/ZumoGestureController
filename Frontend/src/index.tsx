import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n';
import { SocketContext, socket } from './context/socket';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import CssBaseline from '@mui/material/CssBaseline';
import {
  Theme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

import darkTheme from './styles/darkTheme';

const theme: Theme = responsiveFontSizes(darkTheme);

const container: HTMLElement = document.getElementById('root');
const root: ReactDOMClient.Root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <SocketContext.Provider value={socket}>
          <CssBaseline />
          <App />
        </SocketContext.Provider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);

serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
