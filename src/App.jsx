import { BrowserRouter } from 'react-router-dom';
import InicioPage from './Pages/InicioPage';
import AppRouter from './Routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <InicioPage />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
