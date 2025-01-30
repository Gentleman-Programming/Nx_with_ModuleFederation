import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import './styles.scss';
import { CharactersProvider } from '@hagamos-un-microfront/shared';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CharactersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharactersProvider>
  </StrictMode>
);
