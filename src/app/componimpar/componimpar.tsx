import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from '../../redux/features/counterSlice';   

interface ComponimparProps {}

const Componimpar: FC<ComponimparProps> = () => {
  const dispatch = useDispatch();

  return (
    <div className='m-6'>
      <p className='my-2'>COMPONENTE IMPAR</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Incrementar por 5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>Decrementar por 5</button>
      <button onClick={() => dispatch(reset())}>Resetear</button>
    </div>
  );
};

export default Componimpar;
