/*import React, {useState} from 'react';
//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que passa um componente Pai para um componente filho
//Estado: Informações mantidas pelo componente, lembrar da inmutabilidade

function App() {
  const  [counter,setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter+1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}*/
import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();

  }, []);
  async function handleAddDev(data) {
    const response = await api.post('/devs',data);
    setDevs([...devs, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
