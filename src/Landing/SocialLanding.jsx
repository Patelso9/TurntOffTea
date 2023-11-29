import { Button } from '@mui/material'
import React from 'react'
import './SocialLanding.css'
import logo from '../img/tot_logo2.png'



const SocialLanding = () => {
  return (
    <div>
        
     {/* <h1 className='social-landing-title'>Turnt off Tea</h1> */}

     <img src={logo} alt="Turnt off Tea logo" style={{width: "40%"}}/>
     <br />

     <h3>Let's get turnt!</h3>

    {/* <Button
         variant="outlined" 
         size="large" 
         style = {{width:'80%' , textTransform:'none', color:"black", borderColor:"white", backgroundColor:"rgba(255,255,255,0.5)", fontFamily: "Didot, serif" }} 
        >Website</Button> 
    <br /> <br /> */}
 
  

    <Button
        href="https://www.amazon.com/Productivity-Optimized-Business-Professionals-Academic/dp/B07RBS1QFH/ref=sr_1_1_sspa?crid=2S7HKV4ULQ49V&keywords=roterunner%2Bpurpose%2Bplanner&qid=1701295152&sprefix=purpose%2Bplanner%2Brote%2Caps%2C100&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" 
        variant="outlined" 
        size="large" 
        style = {{width:'80%' , textTransform:'none', color:"black", borderColor:"white", backgroundColor:"rgba(255,255,255,0.5)", fontFamily: "Didot, serif" }}
        >Favorite Planner (undated)
        <h3>:  Purpose Planner by Roterunner</h3> </Button> 
    <br /> <br />



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