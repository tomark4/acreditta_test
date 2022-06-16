import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';


/**
 * Card component
 * @props item Object
 */


type PropT = {
    item: any
}

const Card = ({item}:PropT) => {
    const navigate = useNavigate();
    const { category } = useSelector((state:RootState) => state.marvel);
    const { id, thumbnail, name, title } = item;

    /** navigate to detail page */
    const handleNavigation = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div className="col-md-4 mb-5"
        onClick={handleNavigation}
        key={item}>
            <div className="card">
                { category !== "stories" && (
                    <div className="card-picture">
                        { thumbnail && (
                            <img src={`${thumbnail.path}.${thumbnail.extension}` } 
                            className="card-img-top" alt="..." />
                        )}
                    </div>
                )}
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{name || title}</b></h5>
                </div>
            </div>
        </div>
    )
}

export default Card