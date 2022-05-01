import React from 'react';

import { ImageLink } from 'react-emails-components-miscellaneous';

const SocialIcon = (props) => {
  let {href} = props;
  let attributes = {
    href: href,
    src: 'https://www.vouchful.com/images/email-kit/placeholder-icon.png',
    width: '28',
    border: '0', 
    alt:'Icon'
  }

  return (
    <td valign="top" width="28">  
      <ImageLink {...attributes} />  
    </td>
  );
}

export default SocialIcon;
