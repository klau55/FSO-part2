import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1}]) 
  const [newName, setNewName] = useState('')
  

 
  const Note = ({ note }) => {
    return (
    <li>{note.name}</li>
  )}

  
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  
  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }

   setPersons(persons.concat(nameObject))
   setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
     
      <h2>Numbers</h2>
      
      <ul>
        {persons.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    
        
    </div>
  )
}

export default App