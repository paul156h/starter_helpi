import React, {useState} from 'react'
import axios from 'axios'

const ChatComponent = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

     const sendMessage = async () => {
        if (input.trim() === '') return;

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci-codex/completions',
                {
                    prompt: input,
                    max_tokens: 150
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ${process.env.PUT_KEY_HERE}'
                    },
                }
            );
            setMessages([...messages, {text: input, type: 'user'}]);
            setMessages([...messages, {text: response.data.choices[0].text, type: 'ai'}]);
            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
     } 

     return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={message.type}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
     )

};

