import { useRef, useState } from 'react'
import Footer from '../components/Footer,'
import Header from '../components/Header'
import '../styles/App.css'
import '../styles/Cuestionario.css'

export default function Lec1SumRes () {
  // let [index, setIndex] = useState(0);
  // let [question, setQuestion] = useState(data[index]);
  // let [lock, setLock] = useState(false);
  // let [score, setScore] = useState(0);

  // let option1 = useRef(null);
  // let option2 = useRef(null);
  // let option3 = useRef(null);
  // let option4 = useRef(null);

  // let optArray = [option1,option2, option3, option4]
  // const checkAnswer = (li, answer) =>{
  //     if(lock === false){
  //         if(question.answer ===answer){
  //             li.target.classList.add("Correct");
  //             setLock(true);
  //             setScore(prev=>prev+1)
  //         }else{
  //             li.target.classList.add("Wrong");
  //             setLock(true);
  //             optArray[question.ans-1].current.classList.add("Correct ref=(Option1)")
  //         }
  //     }
  // }

  // const nextQuestion = () =>{
  //     if (lock === true){
  //         setIndex(++index);
  //         setQuestion(data[index]);
  //         setLock(false);
  //         optArray.map((option)=>{
  //             option.current.classList.remove("Wrong");
  //             option.current.classList.remove("Correct");
  //             return null
  //         })
  //     }

  // }

  return (
    <div className="APP">
      <Header />
      <main>
        <header>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
          <a href="">Ingresar código de cursos</a>
        </header>
        <h1>Cuestionario 1: Sumas y Restas</h1>
        <section className="Cuestionario">
          {/* <h4>{index+1}Pregunta {question.question}</h4>  */}
          <h4>Pregunta</h4>
          <ul>
            <li>Respuesta 1</li>
            <li>Respuesta 2</li>
            <li>Respuesta 3</li>
            <li>Respuesta 4</li>
            {/* <li ref=(Option1) onClick={(li)=>{checkAnswer(li,1)}}>{question.option1}Respuesta 1</li>
                        <li ref=(Option2) onClick={(li)=>{checkAnswer(li,2)}}>{question.option2}Respuesta 2</li>
                        <li ref=(Option3) onClick={(li)=>{checkAnswer(li,3)}}>{question.option3}Respuesta 3</li>
                        <li ref=(Option4) onClick={(li)=>{checkAnswer(li,4)}}>{question.option4}Respuesta 4</li> */}
          </ul>
          <button>Next</button>
          {/* <button onClick={nextQuestion}>Next</button> */}
          <div>1 de 5 preguntas</div>
          {/* <div>{index+1} de {data.length} preguntas</div> */}
        </section>
      </main>
      <Footer />
    </div>
  )
}
