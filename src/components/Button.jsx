import React from 'react'

function Button(props) {
  return (
    <a href={props.linkTo} smooth>

<button id='primary-button' className='bg-yellow'>{props.text}</button>
    </a>
  )
}

export default Button