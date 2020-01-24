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
import React, { useEffect } from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43155168?s=460&v=4" alt="Yohel D. Larrauri Pizarro" />
              <div className="user-info">
                <strong>Yohel Domingo Larrauri Pizarro</strong>
                <span>Java,Spring,PostgreSQL</span>
              </div>
            </header>
            <p>Analista de Desenvolvimento de Sistemas na AGL Solutions</p>
            <a href="https://github.com/ydlpizarro">Accese ao Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43155168?s=460&v=4" alt="Yohel D. Larrauri Pizarro" />
              <div className="user-info">
                <strong>Yohel Domingo Larrauri Pizarro</strong>
                <span>Java,Spring,PostgreSQL</span>
              </div>
            </header>
            <p>Analista de Desenvolvimento de Sistemas na AGL Solutions</p>
            <a href="https://github.com/ydlpizarro">Accese ao Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43155168?s=460&v=4" alt="Yohel D. Larrauri Pizarro" />
              <div className="user-info">
                <strong>Yohel Domingo Larrauri Pizarro</strong>
                <span>Java,Spring,PostgreSQL</span>
              </div>
            </header>
            <p>Analista de Desenvolvimento de Sistemas na AGL Solutions</p>
            <a href="https://github.com/ydlpizarro">Accese ao Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43155168?s=460&v=4" alt="Yohel D. Larrauri Pizarro" />
              <div className="user-info">
                <strong>Yohel Domingo Larrauri Pizarro</strong>
                <span>Java,Spring,PostgreSQL</span>
              </div>
            </header>
            <p>Analista de Desenvolvimento de Sistemas na AGL Solutions</p>
            <a href="https://github.com/ydlpizarro">Accese ao Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
