import React from "react"
function Button({children, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled}
         className={`btn btn-${version}`}>
            Send
        </button>
    )
}

Button.defaultProps ={
    version: 'primary',
    type: 'button',
    isDisabled: false
}

// Button.propTypes = {
//     children: PropTypes.node.isRequired,
//     version: propTypes.string,
//     type: propTypes.string,
//     isDisabled: propTypes.bool,
// }
export default Button
