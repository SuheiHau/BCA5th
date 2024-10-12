import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import '../Styles/Footer.css'


function footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <LinkedIcon/>
    </div>
    <p>&copy; 2023 Techpizza's.com</p>
    </div>
  )
}

export default footer

