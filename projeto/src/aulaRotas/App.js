import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import '../App.css';
import Formulario from '../aulaForms/Formulario';

function App() {
  return (
    <div>
      Primeiro projeto com rotas
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first-page/:answer' element={<FirstPage />} />
        <Route path='/second-page' element={<SecondPage />} />
        <Route path='/formulario' element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;