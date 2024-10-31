/* eslint-disable react/no-unknown-property */
import { useState } from 'react'

export default function FormInput (prop) {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, ...inputProp } = prop

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <>
      <label>{label}</label>
      <input
        {...inputProp}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProp.name === 'confirmarcontra' && setFocused(true)}
        focus={focused.toString()}
      />
      <span focus={focused.toString()}>{errorMessage}</span>
    </>
  )
}
