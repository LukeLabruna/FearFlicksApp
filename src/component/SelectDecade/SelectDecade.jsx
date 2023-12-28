import { Link, useParams } from "react-router-dom"
import "./SelectDecade.css"


const SelectDecade = () => {

  const { decada } = useParams()

  const decadas = ['1960', '1970', '1980', '1990', '2000', '2010', '2020'];

  return (
    <div className="selectDecade">
      {
        decadas.map((d, i) => (
          <Link key={i} to={`/decada/${d}`}  className={decada === d ? "current" : ""}>{d}</Link>
        ))
      }
    </div>
  )
}

export default SelectDecade