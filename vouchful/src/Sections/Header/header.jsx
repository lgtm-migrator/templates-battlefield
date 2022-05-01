import React from 'react';

import { Logo } from 'react-emails-components-miscellaneous';

const Header = ({}) => {

  const linkA = {
    href:"https://www.example.com"
  };

  const imgA = {
    alt:"Company", 
    border:"0", 
    src:"https://www.vouchful.com/images/email-kit/placeholder-logo.png", 
    width:"56"
  };

  const logoProps = {...linkA, ...imgA}
  return (
    <tr>
      <td align="left" id="header">
          <Logo {...logoProps} />
          
      </td>
    </tr>   
  );
}


export default Header;
