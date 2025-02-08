import React from 'react';
const a = [
  {
    id: 1,
    name: 'John Doe',
    age: 32
  },
  {
    id: 2,
    name: 'hello',
    age: 20
  }
]
const App = () => {
  
  return (
    <div>
      <h1>Lists in React</h1>
      <p>First Object Name: {a[0].name}</p>
      <p>First Object Age: {a[1].age}</p>
      <ul>
        {
          a.map((i) => <li key={i.id}>{i.name} - {i.age}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
