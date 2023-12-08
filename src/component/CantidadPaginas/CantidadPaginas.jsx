import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import "./CantidadPaginas.css"


const CantidadPaginas = () => {

  const totalBotones = 20;
  const botonesPorPagina = 5;

  const { decada, numberPage } = useParams()

  const [paginaActual, setPaginaActual] = useState(1 || parseInt(numberPage));

  const handleClickPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const calcularDesplazamiento = () => {
    const mitadBotones = Math.floor(botonesPorPagina / 2);

    if (paginaActual <= mitadBotones + 1) {
      return 0;
    } else if (paginaActual >= totalBotones - mitadBotones) {
      return totalBotones - botonesPorPagina;
    } else {
      return paginaActual - mitadBotones - 1;
    }
  };

  const paginas = Array.from({ length: botonesPorPagina }, (_, index) => {
    const desplazamiento = calcularDesplazamiento();
    const numeroPagina = desplazamiento + index + 1;
    if (numeroPagina > 0 && numeroPagina <= totalBotones) {
      return (
        <Link key={numeroPagina} to={`/decada/${decada}/pagina/${numeroPagina}`} >
          <button onClick={() => handleClickPagina(numeroPagina)}>
           {numeroPagina}
          </button>
        </Link>
      );
    } return null
    
  });


  return (
    <div className="cantidadPaginas">
    {paginas}
    </div>
  )
}

export default CantidadPaginas