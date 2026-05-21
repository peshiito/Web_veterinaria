import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'wouter'
import { ChevronDown, Stethoscope, Syringe, Scissors, Heart, Clock, Shield } from 'lucide-react'
import './Dropdown.css'

const services = [
  { id: 'consultas', name: 'Consultas Médicas', icon: Stethoscope, description: 'Atención personalizada' },
  { id: 'vacunacion', name: 'Vacunación', icon: Syringe, description: 'Calendario completo' },
  { id: 'peluqueria', name: 'Peluquería', icon: Scissors, description: 'Estética profesional' },
  { id: 'cirugias', name: 'Cirugías', icon: Heart, description: 'Procedimientos seguros' },
  { id: 'guardia', name: 'Guardia 24/7', icon: Clock, description: 'Emergencias' },
  { id: 'laboratorio', name: 'Laboratorio', icon: Shield, description: 'Diagnóstico preciso' },
]

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-trigger"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        Servicios
        <ChevronDown size={16} className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
      </button>
      
      {isOpen && (
        <div 
          className="dropdown-menu"
          onMouseLeave={() => setIsOpen(false)}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link 
                key={service.id} 
                href={`/servicios#${service.id}`}
                className="dropdown-item"
                onClick={() => setIsOpen(false)}
              >
                <div className="dropdown-item-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="dropdown-item-title">{service.name}</div>
                  <div className="dropdown-item-desc">{service.description}</div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown