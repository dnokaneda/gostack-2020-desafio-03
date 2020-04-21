import React from "react";

function Repositories({ title, onClick }) {
  return (
        <li>
          <label>
            { title.toUpperCase() }
          </label>
          

          <button onClick={ onClick } >
            Remover
          </button>
        </li>
  );
}

export default Repositories;
