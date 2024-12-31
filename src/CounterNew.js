import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./features/counter/counterSlicenew";

function CounterNew()
{
    const count = useSelector((state) => state.counternew.number); // Ensure 'counter' matches the reducer name in the store
    console.warn('count'+count);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    IncrementNew
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    DecrementNew
                </button>
            </div>
        </div>
    );
}

export default CounterNew;