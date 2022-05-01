import React from 'react';


// import { SocialMedia } from 'react-emails-components-miscellaneous';

import { BasicTable } from 'react-email-components-table';

import SocialIcon from '../../Elements/SocialIcons/SocialIcons.jsx'

const SocialMediaLayout = ({}) => (

  <td align="left">

    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
      <tbody>
        <tr>


          <SocialIcon href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />            
          <td width="16"></td>

          <SocialIcon href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />
          <td width="16"></td>

          <SocialIcon href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />
          <td width="16"></td>

          <SocialIcon href="https://www.example.com" src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" />

        </tr>
      </tbody>
    </table>  
    
  </td>

);

export default SocialMediaLayout;