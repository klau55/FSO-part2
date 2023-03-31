const Header = ({ header }) => <h2>{header}</h2>

const Total = ({ parts }) => {
console.log(parts)

const total = parts.reduce(function(sum, part) {
  console.log("HELLO", sum, part)
  return sum + part.exercises
}, 0)

return <p>Number of exercises {total}</p>
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>  (
  <>
    {parts.map(part => 
    <Part key={part.id} part={part}  />
    )}       
  </>
)


const Course = ({ courses }) => (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course => (
        <>

          <Header header={course.name} />
          <Content parts={course.parts} />
          <strong><Total parts={course.parts} /></strong>
        </>
    ))}
    </>
)
export default Course