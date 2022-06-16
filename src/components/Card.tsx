import { useNavigate } from 'react-router-dom';


/**
 * Card component
 * @props item Object
 */


type PropT = {
    item: any
}

const Card = ({item}:PropT) => {
    const navigate = useNavigate();
    const { id, thumbnail, name } = item;

    /** navigate to detail page */
    const handleNavigation = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div className="col-md-4 mb-5"
        onClick={handleNavigation}
        key={item}>
            <div className="card">
                <div className="card-picture">
                    <img src={`${thumbnail.path}.${thumbnail.extension}` } 
                    className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <p className="card-text text-center"><b>{name}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Card