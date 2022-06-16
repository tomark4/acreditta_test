import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { 
  fetchData, 
  updateCategory, 
  updateSearchText 
} from '../store/marvelSlice';

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

  const dispatch = useAppDispatch();
  const {data, loading, category, searchText} = useSelector((state:RootState) => state.marvel );

  useEffect(() => {
    
    const timer = setTimeout(() => {
      dispatch(fetchData({category, name:searchText}))
    },1000)

    return () => { clearTimeout(timer) }
  },[searchText, dispatch, category])
  

  const handleChangeOption = (item:any) => {
    dispatch(updateCategory(item.name));
  }

  return (
    <div className="pt-5 container">
      <div>
        <form action="">
          <div className="mb-3">
            <input type="text" className="form-control form-control-lg"
            placeholder="Buscar..."
            value={searchText} 
            name="search"
            onChange={(e) => dispatch(updateSearchText(e.target.value))}/>
          </div>
          <div className="mb-3">
            <ul className="search-options">
              {OPTIONS.map((item,i:number) =>  (
                <li 
                className={`${category === item.name ? 'active' : null}`}
                onClick={() => handleChangeOption(item)}
                key={i}
                >{item.title}</li>
              ))}
            </ul>
          </div>
        </form>

        <div className="row mt-5">
            { loading && <Loader />}

            { !loading && data.length > 0 && (
              data.map(item => (
                <Card key={item.id} item={item}/>
              ))
            )}
        </div>
      </div>
    </div>
  )
}

export default HomePage