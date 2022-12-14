import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: '100px',
        height: '100px',
        margin: '20% 50% 50% 42%',

        display: 'block',
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loader
