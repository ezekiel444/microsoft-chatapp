import React, { useState } from 'react'
import axios from 'axios'

export default function LoginForm() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')

    const handleSumbit = async (event)=>{
event.preventDefault()

const authenticationObject = {
    'Project-ID':"e489f4b2-e841-496e-9df0-27a37a1d1e2e", 
    'User-Name':userName,
    'User-Secret':password
}

try{
await axios.get('https://api.chatengine.io/chats', {headers:authenticationObject})

localStorage.setItem('username', userName)
localStorage.setItem('password', password)
window.location.reload()

}catch(error){
    setError('Ooops Incorrect credentials')
}

    }

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSumbit}>
                    <input type="text"
                     value={userName}
                      onChange={e=>setUserName(e.target.value)}
                      className='input'
                      placeholder='Username'
                      required
                       />
                       <input type="text"
                        value={password} 
                        onChange={e=>setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required
                        />
<div align="center">
<button type='submit' className='button'>
    <span>Start Chatting</span>
          </button>
            </div>
            <h2 style={{textAlign:'center'}}>{error}</h2>
                </form>
            </div>
        </div>
    )
}
