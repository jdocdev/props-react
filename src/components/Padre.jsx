import { useState } from 'react';
import Hijo from './Hijo';

const Padre = () => {
  const [respuestaHijo, setRespuestaHijo] = useState('');

  // Función de devolución de llamada para recibir la respuesta del hijo
  const recibirRespuestaDelHijo = (respuesta) => {
    setRespuestaHijo(respuesta);
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <p>Respuesta del Hijo: {respuestaHijo}</p>
      {/* Pasar la función de devolución de llamada como prop al hijo */}
      <Hijo enviarRespuestaAlPadre={recibirRespuestaDelHijo} />
    </div>
  );
};

export default Padre;