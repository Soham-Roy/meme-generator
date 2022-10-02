import { useEffect, useState } from 'react'

function Meme() {
  const [formData, setFormData] = useState(
    {
      topText: "",
      bottomText: "",
      image: `http://i.imgflip.com/1bij.jpg`
    }
  )

  const [allMemes, setAllMemes] = useState([]);

  useEffect ( () => {
    fetch( `https://api.imgflip.com/get_memes` )
      .then( res => res.json() )
      .then( data => setAllMemes(data.data.memes) )
  }, [] );

  function handleChange(event) {
    const {name, type, value} = event.target;
    setFormData( prevData => {
      return {
        ...prevData,
        [name] : value
      }
    } )
  }

  function getNextMeme() {
    let index = Math.floor( Math.random() * allMemes.length )
    setFormData( prevData => {
      return {
        ...prevData,
        image: allMemes[index].url
      };
    } );
  }

  return (
    <div className='meme_box'>
        <form className='form'>
        <input 
            type = "text" 
            name = "topText" 
            className='form_input'
            placeholder='Top text'
            onChange = {handleChange}
            value = {formData.topText}
        />
        <input 
            type = "text" 
            name = "bottomText" 
            className='form_input'
            placeholder='Bottom Text'
            onChange = {handleChange}
            value = {formData.bottomText}
        />
        </form>
        <button 
          className='next_button'
          onClick={getNextMeme}
        >
            Get Next Meme
        </button>
        <div className='meme'>
          <img 
            src={formData.image} 
            alt="" 
            className='meme_image'
          />
          <h2 className='meme_text top'>{formData.topText}</h2>
          <h2 className='meme_text bottom'>{formData.bottomText}</h2>
        </div>
    </div>
  )
}

export default Meme
