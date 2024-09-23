import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IdeaProvider } from './context/IdeaContext';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <IdeaProvider>
      <App />
    </IdeaProvider>
  </StrictMode>,
);
