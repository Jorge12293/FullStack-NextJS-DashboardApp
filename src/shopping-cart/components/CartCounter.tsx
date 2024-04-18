"use client"

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, subtractOne } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props {
    value?:number
}

export interface CounterResponse {
    method: string;
    count: number;
}


const getApiCounter = async(): Promise<CounterResponse> => {
   const data  = await fetch('/api/counter').then(res=>res.json());
   return data;
}

export const CartCounter = ({value=0}:Props) => {
   //const [count, setCount] = useState(value);

  const count = useAppSelector(state => state.counterReducer.count)  
  const dispatch = useAppDispatch(); 
  
// Server
useEffect(()=>{
    getApiCounter()
        .then(({count})=> dispatch(initCounterState(count)));
},[dispatch])

// Local
//   useEffect(()=>{ 
//     dispatch(initCounterState(value))
//   },[dispatch,value])

  return (
    <>
    <span className="text-9xl">{count}</span>
    <div className="flex">
        <button
            onClick={() => dispatch(addOne())}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
        </button>

        <button
            onClick={() => dispatch(subtractOne())}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            -1
        </button>
        {/* <button
            onClick={() => setCount(count + 1)}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
        </button>

        <button
            onClick={() => setCount(count - 1)}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            -1
        </button> */}
    </div>
    </>
  )
}
