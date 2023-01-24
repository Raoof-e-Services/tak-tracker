import React from 'react';
import PropTypes from 'prop-types';
function Button( {color, text, onClick}) {
    
  return (
    <button
     onClick={onClick} 
     className='btn' 
     style={{backgroundColor:color}} >{text}</button>
  )
}
Button.defaultProps = {
    color:'steelblue',
    txt:'ADD',
}
Button.propTypes = {
    color: PropTypes.string,
    txt: PropTypes.string,
    onClick :PropTypes.func
}
export default Button