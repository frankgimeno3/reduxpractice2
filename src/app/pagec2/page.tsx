"use client"
import { RootState } from '@/redux/store';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface Pagec2Props {
  
}

const Pagec2: FC<Pagec2Props> = ({ }) => {
    const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
        <p>Pagec2 counter value</p>
        {counterValue}
        </div>
  );
};

export default Pagec2;