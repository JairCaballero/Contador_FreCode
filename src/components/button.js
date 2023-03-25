import React from 'react';
import '../styles/style.css';

// Desestructuracion es lo mismo que el props
function Button ({ texto, btnClic, manejarClic }) {
  return (
    <button className={btnClic ? 'btn-clic' : 'btn-reload'}
      onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Button;