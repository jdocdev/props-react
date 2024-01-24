import { useState } from 'react';

const Hijo = ({ enviarRespuestaAlPadre }) => {
  const [respuestaLocal, setRespuestaLocal] = useState('');

  // Función para manejar cambios y enviar la respuesta al padre
  const handleChange = (event) => {
    const nuevaRespuesta = event.target.value;
    setRespuestaLocal(nuevaRespuesta);

    // Llamar a la función de devolución de llamada para enviar la respuesta al padre
    enviarRespuestaAlPadre(nuevaRespuesta);
  };

  return (
    <div>
      <h2>Componente Hijo</h2>
      <label>
        Respuesta Local:
        <input type="text" value={respuestaLocal} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Hijo;