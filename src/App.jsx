import axios from "axios"
import { useEffect, useState } from 'react'

function App() {
  const [advice,setAdvice] = useState('')

  useEffect(()=>{
    const fetch = async() =>{
      const response = await axios.get('https://api.adviceslip.com/advice')
      setAdvice(response.data)
    }
    fetch()
  },[])

  const fetchNew = async () => {
    try{
      const response = await axios.get('https://api.adviceslip.com/advice')
      setAdvice(response.data)
    }catch(err){
      console.log(err)
    }
  }

  if(advice !== ''){
    return (
      <div className="App">
          <div className="box">
            <p className="number">ADVICE #{advice.slip.id}</p>
            <p className="advice">{`${advice.slip.advice}`}</p>
            <div className="divider"></div>
            <div onClick={fetchNew} className='dice'></div>
          </div>
      </div>
    )}
}

export default App
