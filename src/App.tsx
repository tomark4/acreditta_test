import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { incrementIfNana } from "./store/testSlice";

function App() {
  const { value } = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(incrementIfNana(2));
  }

  return (
    <div>
      <h1>App</h1>
      <p>{value}</p>
      <button type="button" onClick={handleClick}>test</button>
    </div>
  );
}

export default App;
