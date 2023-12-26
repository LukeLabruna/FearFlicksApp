import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import Roulette from "react-custom-roulette"

const Roulette = () => {
  
  const { ruleta } = useContext(UserContext)
  const [winner, setWinner] = useState(null);

  const handleSpinClick = () => {
    const winnerIndex = Math.floor(Math.random() * ruleta.length);
    setWinner(ruleta[winnerIndex]);
  };

  

  return (
    <div>
      <h2>Ruleta</h2>
      {/* {ruleta.length != 0
        ? ruleta.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
        : <p>No solecciono ninguna pelicula</p>
      } */}

<Roulette
        options={options}
        baseSize={150}
        onComplete={handleSpinClick}
        winner={winner}
      />
      <button onClick={handleSpinClick}>Girar</button>


      
    </div>
  )
}

export default Roulette