import { useSelector,useDispatch } from "react-redux";
import {decrement,increment} from './CounterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
        <button className="button" aria-label="Increment vlaue" onClick={() =>{dispatch(increment())}}> +</button>
        <span className="value">Count: {count}</span>
        <button className="button" aria-label = "Decrement value" onClick={() => {dispatch(decrement())}}>-</button>

        </div>
    )
}

export default Counter