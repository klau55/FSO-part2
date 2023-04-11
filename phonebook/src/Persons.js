
const Note = ({ note }) => {
    return (
    <li>{note.name} {note.number}</li>
  )}

const Persons = ({personsToShow}) => (
<>
    <h2>Numbers</h2>
        
    <ul>
    {personsToShow.map(note => 
        <Note key={note.id} note={note} />
    )}
    </ul>
</>
)
export default Persons