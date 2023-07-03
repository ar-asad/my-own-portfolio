import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './pages/Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="light" style={{ backgroundColor: '#0b073c' }}>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
