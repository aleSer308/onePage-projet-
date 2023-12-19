import './App.css';
import logo from '../src/assets/images/IYV.png';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
    <TopBar/>
    <div className="App">
      <header className="App-header">
        <h1>Hola, yo </h1>
        <img src={logo} className='img_logo' alt='Imagen Y vista logo' />      
      </header>
    </div>
    </>
  );
}

export default App;
