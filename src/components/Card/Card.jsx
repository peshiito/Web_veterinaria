import React from 'react'
import './Card.css'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`card-image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  )
}

export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`card-title ${className}`}>
      {children}
    </h3>
  )
}

export const CardDescription = ({ children, className = '' }) => {
  return (
    <p className={`card-description ${className}`}>
      {children}
    </p>
  )
}

export default Card