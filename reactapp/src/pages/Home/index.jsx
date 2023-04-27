import { useState, useEffect } from 'react'
import './styles.css';
import {Card} from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    console.log("useEffetc foi chamado!")
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Maires</strong>
          <img src="https://github.com/mairess.png" alt="Foto de perfil do github" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setStudentName(e.target.value)}
      />

      <button type='button' onClick={handleAddStudent}>
        Adicionar
        </button>

      {
        students.map(student => (
        <Card 
        key={student.time}
        name={student.name} 
        time={student.time}
        />
        ))
        
      }
      
    </div>
  )
}


