import { useState } from 'react'
import Footer from '../components/Footer,'
import Header from '../components/Header'
import FormInput from '../components/FormInput'
import '../styles/Sesion.css'

export default function InicioSesion () {
  const [formLogValues, setLogFormValues] = useState({
    nombreUsuario: '',
    email: '',
    contrasena: '',
    confirmarcontra: ''
  })

  const formInputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Correo electrónico',
      errorMessage: 'Proporciona un correo electrónico valido.',
      label: 'Correo electrónico',
      required: true
    },
    {
      id: 2,
      name: 'contrasena',
      type: 'password',
      placeholder: 'Contraseña',
      errorMessage: 'La contraseña debe de tener una longitud minima de 8 letras con un máximo de 20, debe incluir al menos una letra, un número, un caracter especial.',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&^*])[a-zA-Z0-9!@#$%&^*]{8,20}$',
      label: 'Contraseña',
      required: true
    }
  ]

  const onChange = (e) => {
    setLogFormValues({ ...formLogValues, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Iniciar Sesión</h2>
          <form action=''>
            {formInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formLogValues[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Ingresar</button>
          </form>
        </section>
        <a href='/Registro'>Registrarse</a>
      </main>
      <Footer />
    </>
  )
}
