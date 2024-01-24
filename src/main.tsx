import ReactDOM from 'react-dom/client';

import configureStore from './store/products-store.ts';

configureStore();

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
