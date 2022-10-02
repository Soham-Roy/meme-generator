import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <div className='app_intro'>
            <img 
                src="src/assets/troll-face.png"
                alt="Meme icon" 
                id='meme_logo'
            />
            <h1 className='app_name'>Meme Generator</h1>
            </div>
            <h4>React Project</h4>
        </header>
    )
}