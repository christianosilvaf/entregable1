import './PhraseGenerator.css'//importando la hoja de estilos del componente
import db from "../db/db.json" //importando la data
import { randomGen } from '../utils/randomGen'; //funcion generadora de elemento random
import { useState } from 'react';//importando hook de estado
import Font from './Font';//imporando el componente de fuente y autor

//definiendo la función componente
function PhraseGenerator ({fromPhraseGenerator}/*se llama como parametro entrada del padre */){
    const [phrase, setphrase] = useState(randomGen(db));
    
    const handleChangePhrase= () =>{
      setphrase(randomGen(db))
    }

    
return(
    <div className='content'>
        <p>
          {phrase.phrase}
        </p>
        <button className='btn' onClick={() => {
          handleChangePhrase();
          fromPhraseGenerator(); //funciones onclick incluida la de llevar al padre esta arriba
          }}> 
        I want to know more </button>
        <Font className="footer" autordata={phrase.author}/>{/*llamando el component y enviando data a un hijo*/}
    </div>
)
};

export default PhraseGenerator; //exportar el componente

