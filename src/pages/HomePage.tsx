import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const OPTIONS = [
  "Personajes",
  "Comics",
  "Series",
  "Historias"
];

const HomePage = () => {
  const [currentOption, setCurrentOption] = useState(OPTIONS[0]);
  let navigate = useNavigate();
  
  const handleNavigation = (id: string) => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="pt-5 container">
      <div>
        
        <form action="">
          <div className="mb-3">
            <input type="text" className="form-control form-control-lg"
            placeholder="Buscar..."/>
          </div>
          <div className="mb-3">
            <ul className="search-options">
              {OPTIONS.map(item =>  (
                <li 
                className={`${currentOption === item ? 'active' : null}`}
                onClick={() => setCurrentOption(item)}
                >{item}</li>
              ))}
            </ul>
          </div>
        </form>

        <div className="row mt-5">
            {[1,2,3,5,6,7,8,9,10].map(item => (
              <div className="col-md-4 mb-5"
              onClick={() => handleNavigation(String(item)) }
              key={item}>
                <div className="card">
                  <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg" 
                  className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center"><b>character name</b></p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage