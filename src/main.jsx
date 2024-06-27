import ReactDOM from 'react-dom/client';
import App from './App';
import CustomProviders from './components/CustomProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomProviders>
    <App />
  </CustomProviders>,
);
