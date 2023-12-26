import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Wheel } from "react-custom-roulette"
import "./RandomRoulette.css"

const RandomRoulette = () => {

  const { ruleta, handleVaciarRuleta } = useContext(UserContext)
  const [girar, setGirar] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [ganador, setGanador] = useState("")
  const [mostrarGanador, setMostrarGanador] = useState(false)


  const options = ruleta.map((movie) => ({
    option: `${movie.title.slice(0, 11)} ...`,
    titulo: movie.title
  }))

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * options.length);
    setPrizeNumber(newPrizeNumber);
    setGirar(true);
    setGanador(options[newPrizeNumber].titulo)
  };

  console.log(ganador)



  return (
    <>
      <h2>Ruleta</h2>
      {mostrarGanador ? (
        <div className="ruedaRuleta">
          <p>{`La pelicula ganadora es: ${ganador}!!`}</p>
        </div>
      ) : (
        ruleta.length !== 0 ? (
          <div className="ruedaRuleta">
            <Wheel
              mustStartSpinning={girar}
              prizeNumber={prizeNumber}
              data={options}
              onStopSpinning={() => {
                setGirar(false);
                setMostrarGanador(true);
                handleVaciarRuleta();
              }}
              backgroundColors={['#3e3e3e', 'white']}
              textColors={['#ffffff', 'black']}
              fontFamily="MontserratAlternates-Thin"
              fontSize={25}
            />
            <button onClick={handleSpinClick}>Girar</button>
          </div>
        ) : (
          <div className="ruedaRuleta">
            <p>No hay peliculas seleccionadas</p>
          </div>
        )
      )}

    </>
  )
}

export default RandomRoulette