import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import Card from '../components/Card';
import { getCharacters } from '../services/marvel.service';
import { updateType } from '../store/marvelSlice';

/**
 * Home page component
 * @author [jose quintero](https://jottasistemas.com)
 */

const OPTIONS = [
  {id: '1', name: "characters", title: "Personajes"},
  {id: '2', name: "comics", title: "Comics"},
  {id: '3', name: "stories", title: "Historias"},
  {id: '4', name: "series", title: "Series"},
];

const HomePage = () => {

  const [currentOption, setCurrentOption] = useState(OPTIONS[0].id);
  const dispatch = useAppDispatch();
  const {data, loading, type} = useSelector((state:RootState) => state.marvel );
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getCharacters(search))
  },[search, dispatch])
  

  const handleChangeOption = (item:any) => {
    setCurrentOption(item.id);
    dispatch(updateType(item.name));
  }

  return (
    <div className="pt-5 container">
      <div>
        <h4>{type}</h4>
        <form action="">
          <div className="mb-3">
            <input type="text" className="form-control form-control-lg"
            placeholder="Buscar..."
            value={search} 
            name="search"
            onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className="mb-3">
            <ul className="search-options">
              {OPTIONS.map((item,i:number) =>  (
                <li 
                className={`${currentOption === item.id ? 'active' : null}`}
                onClick={() => handleChangeOption(item)}
                key={i}
                >{item.title}</li>
              ))}
            </ul>
          </div>
        </form>

        <div className="row mt-5">
            { loading && <h1>Loading...</h1>}

            { !loading && (
              data.map(item => (
                <Card key={item} item={item}/>
              ))
            )}
        </div>
      </div>
    </div>
  )
}

export default HomePage