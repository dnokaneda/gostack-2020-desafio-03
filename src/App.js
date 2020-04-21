import React, { useState, useEffect } from "react";
import api from "services/api";
import "./styles.css";

function App() {

  const [repositories, setRepo] = useState([]);

  useEffect( () => {
    api.get('/repositories')
       .then( response => setRepo(response.data) );
  }, []); 

  async function handleAddRepository() {    
    const data = {
        likes: 0,
        techs: ["Node.js","React.js"],
        title: `Title ${Date.now()}` ,
        url: "https://github.com/dnokaneda/gostack-2020-desafio-02"
    }

    const response = await api.post('/repositories', data);
    setRepo([ ...repositories, response.data ]);
  }

  async function handleRemoveRepository(id) {
    await api.delete('/repositories/'+ id );
    setRepo([]);
    const index = repositories.findIndex( item => item.id === id );
    repositories.splice(index, 1);
    setRepo( repositories );
  }

  return (
    <div>
      <ul data-testid="repository-list">
        
        { 
          repositories.map( item => 
            <li key={ item.id }>
              { item.title }
              <button onClick={ () => handleRemoveRepository( item.id )}> Remover </button>
            </li>  
            )
          }
      </ul>

      <button onClick={ () => handleAddRepository() }>Adicionar</button>
    </div>
  );
}

export default App;
