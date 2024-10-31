export default function Header () {
  return (
    <header>
      <h2>
        <a href="/">SkillMentor</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="">Cursos</a>
          </li>
          <li>
            <a href="/AprendizajeGeneral">Aprendizaje</a>
          </li>
          <li>
            <a className="Sesion" href="/InicioSesion">
              Iniciar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
