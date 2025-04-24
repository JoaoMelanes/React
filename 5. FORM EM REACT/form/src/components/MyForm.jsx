import style from './MyForm.module.css'
import { useState } from 'react'

const MyForm = ({userName, userEmail, userBio, userRole}) => {
    // Gerenciamneto de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState(userBio)
    const [role, setRole] = useState(userRole)

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name, email, bio, role)

    // envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        // validação
        // envio

        // Limpar form
        setEmail('')
        setName('')
        setBio('')
        setRole('')
    }

  return (
    <div>
        {/* Criação de form */}
        {/* Envio de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name || ''}/>
            </div>

            {/* Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
            </label>

            {/* textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/* Selection */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm