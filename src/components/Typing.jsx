import { useEffect, useState } from 'react'

const Typing = ({ text, delay = 50 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= text.length) return
    const timer = setTimeout(() => setCount(count + 1), delay)
    return () => clearTimeout(timer)
  }, [count, text, delay])

  return (
    <span>
      {text.slice(0, count)}
      <span className='cursor'>|</span>
    </span>
  )
}

export default Typing
