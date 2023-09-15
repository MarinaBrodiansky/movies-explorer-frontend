import React from 'react'
import './Spinner.css'
import spinner from '../../images/spinner.svg'

const Spinner = () => {
  return (
    <div className="spinner">
        <img src={spinner} alt="Идет загрузка..." />
    </div>
  )
}

export default Spinner
