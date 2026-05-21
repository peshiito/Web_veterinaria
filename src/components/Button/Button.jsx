import React from 'react'
import './Button.css'

const Button = ({ children, variant = 'primary', size = 'md', icon: Icon, className = '', ...props }) => {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} {...props}>
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
      {children}
    </button>
  )
}

export default Button