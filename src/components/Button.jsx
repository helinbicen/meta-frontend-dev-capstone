import React from 'react'

function Button(props) {
  return (
    <button id='primary-button' className='bg-yellow'>{props.text}</button>
  )
}

export default Button