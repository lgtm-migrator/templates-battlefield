import React from 'react';

import { Copyright, Sign, year } from 'react-emails-components-miscellaneous';

const companyName = () => {
  return 'HackerNoon';
}

const CopyrightLayout = () => (
  <Copyright>
    <em data-testid="copyTest">
      Copyright <Sign />

      {year()}
      {' '}
      {companyName()}. 
    All rights reserved.
  </em>   
  </Copyright> 
);

export default CopyrightLayout;
