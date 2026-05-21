import React from 'react'
import { Route, Switch } from 'wouter'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios" component={Services} />
        <Route path="/nosotros" component={About} />
        <Route path="/contacto" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </ThemeProvider>
  )
}

export default App