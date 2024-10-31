import { useState } from 'react'
import Header from '../components/Header'
import '../styles/Sesion.css'
import FormInput from '../components/FormInput'
import Footer from '../components/Footer,'

export default function Registrarse () {
  const [formRegValues, setFormRegValues] = useState({
    nombreUsuario: '',
    email: '',
    contrasena: '',
    confirmarcontra: ''
  })

  const formInputs = [
    {
      id: 1,
      name: 'nombreUsuario',
      type: 'text',
      placeholder: 'Nombre de usuario',
      errorMessage: 'El nombre de usuario debe de tener una longitud minima de 5 letras, con un maximo de 50 y no debe de incluir caracteres especiales, ni numeros.',
      pattern: '^[A-Za-z]{5,50}$',
      label: 'Nombre de usuario',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Correo electrónico',
      errorMessage: 'Proporciona un correo electrónico valido.',
      label: 'Correo electrónico',
      required: true
    },
    {
      id: 3,
      name: 'contrasena',
      type: 'password',
      placeholder: 'Contraseña',
      errorMessage: 'La contraseña debe de tener una longitud minima de 8 letras con un máximo de 20, debe incluir al menos una letra, un número, un caracter especial.',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&^*])[a-zA-Z0-9!@#$%&^*]{8,20}$',
      label: 'Contraseña',
      required: true
    },
    {
      id: 4,
      name: 'confirmarcontra',
      type: 'password',
      placeholder: 'Confirmar contraseña',
      errorMessage: 'Las contraseñas deben de coincidir.',
      label: 'Confirmar contraseña',
      pattern: formRegValues.contrasena,
      required: true
    }
  ]

  const onChange = (e) => {
    setFormRegValues({ ...formRegValues, [e.target.name]: e.target.value })
  }

  console.log(formRegValues)
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Registro de Usuario</h2>
          <form action=''>
            {formInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formRegValues[input.name]}
                onChange={onChange}
              />
            ))}
            <label htmlFor=''>Tipo de cuenta</label>
            <select required>
              <option value=''>Tipo de cuenta</option>
              <option value='value1'>Estudiante</option>
              <hr />
              <option value='value2'>Profesor</option>
            </select>
            <button>Registrarse</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
