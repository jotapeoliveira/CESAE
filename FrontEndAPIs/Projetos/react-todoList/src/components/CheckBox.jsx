import { useState } from "react"

export default function CheckBox({ defaultChecked = false, setChildValue }) {
  const [checked, setChecked] = useState(defaultChecked)

  function handleClick() {
    setChecked(prevCheck => !prevCheck)
    !checked ? setChildValue(true) : setChildValue(false)
  }

  return (
    <div className="checkbox-wrapper" onClick={handleClick}>
      {!checked && (
        <div className="checkbox unchecked">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" /></svg>
        </div>
      )}
      {checked && (
        <div className="checkbox checked">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" /></svg>
        </div>
      )}

    </div>
  )
}

