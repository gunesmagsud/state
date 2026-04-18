import {useState} from 'react'

function Say() {
    const[say,setSay] = useState(0)
    const artir = () => {
        setSay(say + 1)
    }
    const azalir = () => {
        if(say > 0){
            setSay(say - 1)
        }
    }

  return (
    <div>
        <button onClick={artir}>Artir</button>
        <h1>{say}</h1>
        <button onClick={azalir}>Azalir</button>
    </div>
  )
}

export default Say