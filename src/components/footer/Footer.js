import React from 'react'
import './Footer.css'
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from '@mui/icons-material/Call';
function Footer() {
  return (
    <footer class="footer">
      <div>
        <span className='footer-icon' onClick={() => window.open("https://github.com/ammuoviya", "_blank")}> <GitHubIcon fontSize='small' /> </span>
        <span className='footer-icon' onClick={() => window.open("https://www.linkedin.com/in/oviya-chelladurai-1995661ab//", "_blank")}> <LinkedInIcon fontSize='small' /></span>
        <span className='footer-icon' onClick={() => window.open("mailto:oviya200@gmail.com", "_blank")}> <MailIcon fontSize='small' /></span>
        <span className='footer-icon' onClick={() => window.open("tel://+918526223732", "_blank")}> <CallIcon fontSize='small' /></span>
      </div>
      <div >
        <p class="m-2">Copyright&copy ; 2023 All rights reserved | Oviya</p>
      </div>
    </footer>
  )
}

export default Footer