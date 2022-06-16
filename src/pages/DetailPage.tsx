import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

/**
 * Detail page component
 * @author [jose quintero](https://jottasistemas.com)
 */

const DetailPage = () => {
  const { data, category } = useSelector((state:RootState) => state.marvel);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<any>({});
  const {id} = useParams();

  useEffect(() => {
    const search = data.find(obj => obj.id === Number(id));
    setItem(search);
    setLoading(false);
  },[id, data])

  if(loading){
    return <Loader />
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        { category !== "stories" && (
          <div className="col-md-6 col-sm-12">
            { item.thumbnail && (
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}` } 
              className="detail-picture" alt="..." />
            )}
          </div>
        )}

        <div className={`${category !== 'stories' ? 'col-md-6' : 'col-md-12'} col-sm-12`}>
          <div className="p-3">
            <h2>{item.name || item.title}</h2>
            <p>Modificado: {item.modified}</p>
            <p>{item.description}</p>
          </div>
          <div className="d-flex justify-content-end">
              <Link to="/" className="btn btn-danger"><FontAwesomeIcon icon={faArrowCircleLeft} /> Regresar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage