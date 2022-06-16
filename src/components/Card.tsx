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

    /** navigate to detail page */
    const handleNavigation = (id: string) => {
        navigate(`/details/${id}`)
    }

    return (
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
    )
}

export default Card