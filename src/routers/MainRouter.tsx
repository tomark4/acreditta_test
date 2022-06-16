import {
    Routes,
    Route,
} from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";


/**
 * Main router navigation
 * @author [jose quintero](https://jottasistemas.com)
 */

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default MainRouter