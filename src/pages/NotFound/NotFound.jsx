import React from 'react'
import { Link } from 'wouter'
import { PawPrint, Home } from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="notfound-content">
          <div className="notfound-icon">
            <PawPrint size={80} />
          </div>
          <h1>404</h1>
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home size={18} />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound