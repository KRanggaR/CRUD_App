import React from 'react'
import '../styles/button.css'
import { Plus } from 'lucide-react';

export default function Button({ backgroundColor = 'black', text = 'click me', onClick, type = 'taskButton', Icon}) {
    const buttonStyle = {
        color: 'white',
        text: text,
        backgroundColor: backgroundColor,
    };

    return (
        <>
            <div>
                <button 
                    className={type==='taskButton' ? 'task_button' : 'header_button'}
                    style={buttonStyle} 
                    onClick={onClick}>

                    <Icon 
                        size={16} 
                        color={buttonStyle.color} 
                        strokeWidth={2.2} 
                        style={{ marginRight: '0.4rem' }}/>

                    {text}
                </button>
            </div>
        </>
    )
}
