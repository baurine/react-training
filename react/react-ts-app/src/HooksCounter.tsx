import React, { useState, useEffect } from 'react'

type Props = {
  initialCnt: number
}

export default function HooksCounter(props: Props) {
  const [count, setCount] = useState(props.initialCnt)

  useEffect(() => {
    document.title = `${count}`
  })

  return (
    <div>
      <button onClick={()=>setCount(count-1)}>-</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
