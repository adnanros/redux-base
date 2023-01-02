import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Counter2.module.css'
import { decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd, selectCount2 } from './counter2Slice';

export function Counter2() {
    const count2 = useSelector(selectCount2);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount]= useState("2");
  return (
    <div>
        <div className={styles.row}>
        <button className={styles.button}
        onClick={()=>{dispatch(increment())}}>+</button>
        <span className={styles.value}>{count2}</span>
        <button className={styles.button}
        onClick={()=>{dispatch(decrement())}}>-</button>
        </div>
        <div className={styles.row}>
            <input className={styles.textbox}
            value= {incrementAmount}
            onChange={(e)=>{setIncrementAmount(e.target.value)}}
            />
            <button className={styles.button}
            onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}>Add Amount
            </button>
            <button className={styles.button} 
            onClick={()=>dispatch(incrementIfOdd(Number(incrementAmount)))}>
                Add If Odd
            </button>
            <button className={styles.button}
            onClick={()=>dispatch(incrementAsync(Number(incrementAmount)))}>ADD Async</button>
        </div>
       
    </div>
  )
}
