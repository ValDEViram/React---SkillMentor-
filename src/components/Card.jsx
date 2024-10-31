export default function Card (prop) {
  return (
    <a href={`/${prop.href}`}>
      <article className={`Materia ${prop.nombreMateria} ${prop.dificultad}`}>
        <div>
          {prop.svgIcon}
          {prop.materias
            ? (
            <ul>
              <li className="Materias">{prop.materias}</li>
            </ul>
              )
            : (
            <ul>
              <li className={`${prop.classdificultad}`}>{prop.dificultad}</li>
              <li className="Lecciones">{prop.lecciones}</li>
            </ul>
              )}
        </div>
        <h4 className="">{prop.nombreMateria}</h4>
      </article>
    </a>
  )
}
