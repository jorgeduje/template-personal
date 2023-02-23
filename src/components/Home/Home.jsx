import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/counter/counterSlice";
const Home = () => {
  const { counter } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h2">Redux toolkit</Typography>

      <div>
        <Button
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Typography variant="h2">{counter}</Typography>
        <Button
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Home;
