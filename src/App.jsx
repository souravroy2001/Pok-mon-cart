import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { pokemons } from './data'

function App() {
  const [data, setData] = useState([pokemons[0]])
  const [page, setPage] = useState(1)

  function handelChange(event) {
    const id = event.target.value
    const filter = pokemons.filter((elem) => elem.id == id);
    setData(filter)
    setPage(Number(id))
  }

  function handelPrev(){
    setPage((prev) => prev - 1)
    const filter = pokemons.filter((elem) => elem.id == page);
    setData(filter)
  }

  function handelNex(){
    setPage((prev) => prev + 1)
    const filter = pokemons.filter((elem) => elem.id == page);
    setData(filter)
  }


  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

      <select name="pokemons" id="" onChange={handelChange} style={{width:"400px", padding:"15px",borderRadius:"10px", textTransform:"capitalize"}}>
        {
          pokemons.map((elem) =>
            <option key={elem.id} value={elem.id}>{elem.name}</option>
          )
        }
      </select>
      {

        data.map((elem) => (
          <div key={elem.id} style={{ backgroundColor:"#333", color:"#fff", width: "400px", padding: "15px", boxSizing: "border-box", borderRadius: "10px", margin: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
            <div><img style={{ backgroundColor:"#ccc", width: "150px", borderRadius: "50%", boxSizing: "border-box", padding: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }} src={elem.image} alt="" /></div>
            <div>
              <h1 style={{ textTransform: "capitalize" }}>{elem.name}</h1>
              <p>{elem.description}</p>
            </div>
          </div>
        ))

      }
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button style={{ marginRight: "25px" }} disabled={page === 1} onClick={handelPrev}>Previous</button>
        <p>{page}</p>
        <button style={{ marginLeft: "25px" }} disabled={page === pokemons.length} onClick={handelNex}>Next</button>
      </div>
    </div>
  )
}

export default App





