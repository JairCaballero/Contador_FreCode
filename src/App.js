import './App.css';
import freLogo from './img/logo.png';
import Boton from './components/button';
import Count from './components/count';
import { useState } from 'react';

function App() {

  const [numClic, setnumClics] = useState(0);

  const manejarClic = () => {
    setnumClics(numClic + 1);
  };

  const reloadCont = () => {
    setnumClics(0);
  };

  return (
    <div className="App">
      <div className="frecode-logo-container">
        <img className="frecode-logo" src={freLogo} alt="logo frecode" />
      </div>
      <div className="container-principal">
        <Count nClic={numClic} />
        <Boton texto='Clic' btnClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' btnClic={false} manejarClic={reloadCont} />
      </div>
    </div>
  );
}

export default App;
