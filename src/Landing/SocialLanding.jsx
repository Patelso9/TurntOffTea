import { Button } from '@mui/material'
import React from 'react'
import './SocialLanding.css'

const SocialLanding = () => {
  return (
    <div>
        
     <h1 className='social-landing-title'>Turnt off Tea</h1>

    <Button 
        variant="outlined" 
        size="large" 
        className="social-button"
        style = {{color:"grey", borderColor:"white", fontFamily: "Didot, serif" }}
        >Website</Button> 
    <br />
    <br />
    <Button 
        variant="outlined" 
        size="large" 
        className="social-button"
        style = {{color:"grey", borderColor:"white"  }}
        >Instagram</Button> 
    <br />
    <br />
    <Button 
        variant="outlined" 
        size="large" 
        className="social-button"
        style = {{color:"grey", borderColor:"white"  }}
        >Tik Tok</Button> 
    <br />
    <br />
    <Button 
        variant="outlined" 
        size="large" 
        className="social-button"
        style = {{color:"grey", borderColor:"white"  }}
        >GitHub</Button> 
    <br />
    <br />


    </div>
  )
}

export default SocialLanding