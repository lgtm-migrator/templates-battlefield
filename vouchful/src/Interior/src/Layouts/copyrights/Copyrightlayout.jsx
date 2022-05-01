import React from 'react';

import { 
  Copyright, Sign, Address 
} from 'react-emails-components-miscellaneous';

const companyName = () => {
  return 'Company, Inc';
}

const CopyrightLayout = () => (
  <Copyright>
    <td align="left" class="body text-secondary">
      <Sign /> {companyName()}. All Rights Reserved.
      <br/>

      <Address>
        <span class="address">101 King St, San Francisco, CA 94107</span>  
      </Address>

    </td>
  </Copyright> 
);

export default CopyrightLayout;