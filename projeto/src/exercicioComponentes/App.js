import './App.css';
import Clubes from './Clubes';
import Questionario from './Questionario';

function App() {

var times = ['Palmeiras sem mundial', 'Flamengo o maior', 'Time grande não cai'];

  return (
    <div className="App">
      <header className="App-header">
        <Questionario question="A resposta para a pergunta fundamental sobre a vida, o universo e tudo mais" answer="42" />
        <Clubes clubes={times} />
      </header>
    </div>
  );
}

export default App;
