import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: '040-1234567'}]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

 
  const Note = ({ note }) => {
    return (
    <li>{note.name} {note.number}</li>
  )}

  
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
  }
  

  
  
  const addName = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert (`${newName} is already added to phonebook`)
    }
    else{
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
     
      <h2>Numbers</h2>
      
      <ul>
        {persons.map(note => 
          <Note key={note.id} note={note} number={note.number} />
        )}
      </ul>
    
        
    </div>
  )
}

export default App