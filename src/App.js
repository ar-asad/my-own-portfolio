import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './pages/Router/Routes/Routes';

function App() {
  return (
    <div data-theme="light" className='bg-sky-950 '>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
