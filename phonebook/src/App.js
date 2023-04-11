import { useState, useEffect } from 'react'
import  Filter  from "./Filter.js"
import PersonForm from "./PersonForm.js"
import Persons from "./Persons.js"
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])

const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
}

useEffect(hook, [])

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