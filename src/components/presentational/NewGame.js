import React from 'react'
import '../../css/button.css'
import PropTypes from 'prop-types'

export default function NewGame({reset}) {
  return(
    <div className="button">
      <button onClick={reset} children="Reset Game" />
    </div>
  )
}

NewGame.propTypes = {
  reset: PropTypes.func.isRequired
}
