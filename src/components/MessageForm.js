import React, { useState } from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'

export default function MessageForm(props) {
    const [value, setValue] = useState('')
    const {chatId, creds} = props

    const handleChange = (event)=>{
setValue(event.target.value)
isTyping(props, chatId)
    }

const handleSumbit = (event)=>{
event.preventDefault()
const text = value.trim()
if(text.length > 0 ) sendMessage(creds,chatId,{text})
setValue("")
}

    return (
     <form className='message-form' onSubmit={handleSumbit}>
<input type="text" className="message-input"  placeholder='send a message...' value={value} onChange={handleChange} onSubmit={handleSumbit} />
     </form>
    )
}
