import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 34},
  {name: 'Ryan', age: 36},
  {name: 'Michael', age: 32}
]


const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number} | undefined>()

  const onClick = () => {
    setName('');
    const foundUser = users.find((user) => user.name === name)
    setUser(foundUser)
  }

  return <div>
  User Search
  <input value={name} onChange={(e) => setName(e.target.value)} />
  <button onClick={onClick}>Find User</button>
  <div>
  User Name: {user && user.name}
  Age: {user && user.age}
  </div>
  </div>
}

export default UserSearch
