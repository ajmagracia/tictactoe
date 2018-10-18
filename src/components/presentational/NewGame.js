import React from 'react'
import '../../css/button.css'
import PropTypes from 'prop-types'

export default function NewGame(props) {
  return(
    <div className="button">
      <button onClick={props.reset} children="Reset Game" />
    </div>
  )
}

NewGame.propTypes = {
  onClick: PropTypes.func.isRequired
}
