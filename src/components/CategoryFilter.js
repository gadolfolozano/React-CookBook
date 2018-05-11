import React from 'react'
import PropTypes from 'prop-types'

const CategoryFilter = (props) => (

  <div>
    <label>
      <input
        onChange={props.onClick}
        type="checkbox"
        checked={props.selected}/>{props.text}
    </label>
    <br/>
  </div>
)

CategoryFilter.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
}

export { CategoryFilter }
