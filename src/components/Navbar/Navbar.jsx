function Navbar() {
  return (
    <div className="navbar_container">
      <section className="Logo">
        <h3 className="LogoTitutlo">Patitas Felices</h3>
        <h4 className="SubtituloLogo">Veterinaria</h4>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
            <button>▼</button>
            <section className="servicios">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </section>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
