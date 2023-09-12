import { Button } from '@mui/material'
import React from 'react'
import './SocialLanding.css'



const SocialLanding = () => {
  return (
    <div>
        
     <h1 className='social-landing-title'>Turnt off Tea</h1>

    {/* <Button
         variant="outlined" 
         size="large" 
         style = {{width:'80%' , textTransform:'none', color:"black", borderColor:"white", backgroundColor:"rgba(255,255,255,0.5)", fontFamily: "Didot, serif" }} 
        >Website</Button> 
    <br /> <br /> */}
 
    <Button
        href="https://www.pinterest.com/turntofftea/" 
        variant="outlined" 
        size="large" 
        style = {{width:'80%' , textTransform:'none', color:"black", borderColor:"white", backgroundColor:"rgba(255,255,255,0.5)", fontFamily: "Didot, serif" }}
        >Pinterest</Button> 
    <br /> <br />

   <Button
        href="https://instagram.com/turntofftea?igshid=OGQ5ZDc2ODk2ZA==" 
        variant="outlined" 
        size="large" 
        style = {{width:'80%' , textTransform:'none', color:"black", borderColor:"white", backgroundColor:"rgba(255,255,255,0.5)", fontFamily: "Didot, serif" }}
        >Instagram</Button> 
    <br /> <br />

    <Button
        href="https://github.com/Patelso9"  
        variant="outlined" 
        size="large" 
        style = {{width:'80%' , textTransform:'none', color:"black", borderColor:"white", backgroundColor:"rgba(255,255,255,0.5)", fontFamily: "Didot, serif" }}
        
        >GitHub</Button> 
    <br />

    </div>
  )
}

export default SocialLanding