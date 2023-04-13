const Note = ({ note, deleteperson }) => {
    return (
    <li>
        {note.name} {note.number}
        <button onClick={deleteperson} id={note.number} >Delete contact</button>
    </li>
  )}

const Persons = ({personsToShow, deleteperson}) => (
<>
    <h2>Numbers</h2>
        
    <ul>
    {personsToShow.map(note => 
        <Note key={note.id} note={note} deleteperson={deleteperson(note.id, note.name)} />
    )}
    </ul>
</>
)
export default Persons