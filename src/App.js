import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './pages/Router/Routes/Routes';

function App() {
  return (
    <div data-theme="light" style={{ backgroundColor: '#0b073c' }}>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
