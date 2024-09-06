import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'primereact/resources/themes/lara-light-purple/theme.css';
// import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import  '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import store from '../store.js';
import { Provider } from 'react-redux';
        
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>

    <App />
      </Provider>
  </StrictMode>,
)
