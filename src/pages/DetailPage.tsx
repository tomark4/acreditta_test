import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const DetailPage = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg"
          alt="" className="detail-picture"/>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="p-3">
            <h2>title</h2>
            <h4>year</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis fugiat aliquam, quia asperiores est maxime repudiandae commodi distinctio eius aspernatur dolore sapiente saepe assumenda esse eveniet cupiditate non voluptatum deserunt! Adipisci, sequi. Vitae repudiandae, veniam nisi, tempore sed, voluptas ipsam libero aspernatur laborum dolores quasi saepe exercitationem ipsum voluptatum quas.</p>
          </div>
          <div className="d-flex justify-content-end">
              <Link to="/" className="btn btn-primary"><FontAwesomeIcon icon={faArrowCircleLeft} /> Regresar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage