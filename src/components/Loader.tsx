import React from 'react'

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger" role="status"
        style={{ width: "4rem", height: "4rem"}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loader