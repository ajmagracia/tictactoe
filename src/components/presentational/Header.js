import React from 'react'
import PropTypes from 'prop-types'

export default function Header({children}) {
  return(
    <React.Fragment>
      <h1 className="header">Tic Tac Toe</h1>
      <h2 className="header">{ children }</h2>
    </React.Fragment>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired
}
