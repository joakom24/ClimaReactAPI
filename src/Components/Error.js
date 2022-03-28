import React from 'react'
import PropTypes from 'prop-types'
const Error = ({mensaje}) => {
    return (
        <div>
        
            <p className="red darken-4 error">{mensaje}</p> 
            
        </div>
    )
}
Error.protoTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error
