import React, { useEffect, useState } from "react";
import api from "./services/api";

import Repositories from "./componentes/repositories";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  useEffect( () => {
    
    async function handleGetRepository() {
      if( repositories.length === 0 ) {
        const _temp = [];
        const response = await api.get('/repositories');
        console.log(response)
        response.data.forEach( item => {
          //_temp.push(<Repositories title={item.title} onClick={ () => handleRemoveRepository(item.id) } />);

          _temp.push(
          <li>
          
            { item.title }
          
          

          <button onClick={ () => handleRemoveRepository(item.id) } >
            Remover
          </button>
        </li>
        );


        });

        setRepositories(_temp);
      }
    }

    handleGetRepository();    
  }, []);

  return (
    <div>
    <ul data-testid="repository-list">
      <li>
        Repositório 1

        <button onClick={() => handleRemoveRepository(1)}>
          Remover
        </button>
      </li>
    </ul>

    <button onClick={handleAddRepository}>Adicionar</button>
  </div>
  );
}

export default App;
