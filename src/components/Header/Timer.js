import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { increment, runTimer, selectTime } from './timerSlice';

export default function Timer(props) {
  const dispatch = useDispatch();

  const time = useSelector(selectTime);

  useEffect(() => {
    dispatch(runTimer())
  }, []);

  return (
    <span>
      {time}
    </span>
  )
}