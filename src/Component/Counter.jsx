import {useDispatch, useSelector} from "react-redux";
import { decrement, increment } from "../Redux/Action";

function Counter() {
  const value = useSelector((state) => state.count.count);
  console.log(value);

  const dispatch=useDispatch();

  return (
    <>
      <div>
        <button onClick={()=>dispatch(increment(1))}>Add</button>
        <div>{value}</div>
        <button onClick={()=>dispatch(decrement(1))}>sub</button>
      </div>
    </>
  );
}
export default Counter;
