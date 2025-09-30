import './App.css' 

import Message from './Message.jsx';
import MessageWithImage from './MessageWithImage.jsx';
import MiniCalculator from './MiniCalculator.jsx';

function App() {
  const nom = "sahar";
  const dateActuelle = new Date().toLocaleDateString();
  const heureActuelle = new Date().toLocaleTimeString();

  const sousTitre = <h2>La date et l'heure</h2>;

  return (
    <>
      <div className="App">
        <h1>Bienvenue, {nom} !</h1>
        <p>Ceci est mon premier composant React avec JSX.</p>
        
        {sousTitre}
        <p>Aujourd'hui, nous sommes le {dateActuelle} et il est {heureActuelle}.</p>
        
        <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} /> 
                
        <Message />
        
        <MessageWithImage />

        <MiniCalculator />
        
      </div>
    </>
  )
}

export default App