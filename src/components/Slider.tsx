import { ChangeEvent, useState } from 'react'

interface SliderProps {
  min: number
  max: number
  onChange: (value: number) => void
  defaultValue?: number
  id?: string
  className?: string
}

function Slider({ min, max, onChange, defaultValue = min, ...defaultProps }: SliderProps) {
  const [current, setCurrent] = useState(defaultValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setCurrent(value)
    onChange(value)
  }

  return (
    <div className="row-input">
      <input
        type="range"
        min={min}
        max={max}
        value={current}
        {...defaultProps}
        onInput={handleChange}
      />
      <label htmlFor="maxPage">{current}</label>
    </div>
  )
}

export default Slider
