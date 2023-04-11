import { useState } from 'react'
import  Filter  from "./Filter.js"
import PersonForm from "./PersonForm.js"
import Persons from "./Persons.js"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter)) 


 



  
  const handleFilterChange = (event) => {
    console.log("11111111111111", event.target.value)
    setFilter(event.target.value)
    if(event.target.value != null) {
      setShowAll(false)
    }
      
  }
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
    setFilter('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Persons personsToShow={personsToShow} />
  
    </div>
  )
}

export default App