import React from 'react';
import Header from './Header';
//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que passa um componente Pai para um componente filho
//Estado:

function App() {
  return (
    <>
    <Header title="Titulo 1"/>
    <Header title="Titulo 2"/>
    <Header title="Titulo 4"/>
    </>
  );
}

export default App;
