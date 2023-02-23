import { Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from "../../redux/slices/counter/counterSlice";
const Home = () => {
  const count = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();

  console.log(count)

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
        <Typography variant="h2">{count}</Typography>
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
