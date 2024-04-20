"use client"
import { RootState } from '@/redux/store';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface Pagec1Props {
  
}

const Pagec1: FC<Pagec1Props> = ({ }) => {
    const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
        <p>Pagec1 counter value</p>
        {counterValue}
        </div>
  );
};

export default Pagec1;