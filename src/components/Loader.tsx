
const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="spinner-border text-danger" role="status"
        style={{ width: "4rem", height: "4rem"}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loader