import './App.css'
import PhraseGenerator from "./components/PhraseGenerator" //importandoelcomponente
import { randomGen } from './utils/randomGen'; //otra vez la función para random
import { useState } from 'react';

function App() {
  const arraybg=["bi1","bi2","bi3","bi4"];  //arreglo de clases de distintos fondos
  const [fondo, estableceDatos] = useState(randomGen(arraybg)); //hook para estadode clase de fondo
  const fromPg = () => {  //esta funcion para importar cosas del hijo
    estableceDatos(randomGen(arraybg)) //para setear el estado
}

  
  return (
    <main className={`App ${fondo}`}>
      <h1 className='title'>UNIVERSE FACTS</h1>
      <PhraseGenerator fromPhraseGenerator={fromPg}/> {/*llamando al componente y prop para importar de hijo*/}
    </main>
  )
}

export default App
