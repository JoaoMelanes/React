import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['João', 'matheus', 'carlos'])

    const [users, setUsers] = useState([
        {id: 1, name: "João", age: 21},
        {id: 2, name: "matheus", age: 31},
        {id: 3, name: "Pedro", age: 24},
    ])

    const deleteRadom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((preveUsers) => preveUsers.filter((user) => randomNumber !== user.id) )
    }

  return (
    <div>
        {/* render sem key */}
        <ul>
            {list.map((item) => (<li>{item}</li>))}
        </ul>

        {/* redner com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>

        {/* previous states */}
        <button onClick={deleteRadom}>Delete random user</button>
    </div>
  )
}

export default ListRender