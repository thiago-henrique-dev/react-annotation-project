import React, {useState , useEffect} from "react";
import api from './service/api'
import './app.css'
import './global.css'
import './aside.css'
import './main.css'
import Notes from '../src/Componentes/Notes/index'
import RadioButton from "./Componentes/RadioButton";


 function App() {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setAllNotes] = useState([])


  useEffect(() => {
    
    getAllNotes()
  }, [])
  async function getAllNotes(){
    const response  = await  api.get('/annotations')

    setAllNotes(response.data)
  }
  
  async function handleDelete(id){
    const deletedNote = await api.delete(`/annotations/${id}`)

    if(deletedNote){
      setAllNotes(allNotes.filter(note => note._id != id))
    }
  }

  async function handleChangePriority(id){
    const note = await api.post(`/priorities/${id}`);

    if(note){
      getAllNotes()
    }
  }


  async function handleSubmit(e){
    e.preventDefault()
    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitle('')
    setNotes('')
    setAllNotes([... allNotes, response.data])
  }


  useEffect(() => {
    function enableSubmitButton(){
     let btn = document.getElementById('btn_submit')
     btn.style.background = '#FFD3CA'
     if(title && notes){
      btn.style.background = '#EB8F7A'
     }
    }

    enableSubmitButton()
  }, [title, notes])

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
         <div className="input-block">
          <label htmlFor="title">Titulo da Anotação</label>
         <input
            riquered
            maxLength="30"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
         </div>

         <div className="input-block">
          <label htmlFor="nota">Anotações</label>
          <textarea 
          required
          value={notes}
          onChange={e => setNotes(e.target.value)}
          />

          </div>

          <button id="btn_submit" type="submit">Salvar</button>
        </form>
        <RadioButton/>
      </aside>
      <main>
        <ul>
          {
            allNotes.map(data => (
              <Notes 
              key={data._id}
              data={data}
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
              />
            ))
          }
         
            
        </ul>
      </main>

    </div> 

  )
}

export default App;
