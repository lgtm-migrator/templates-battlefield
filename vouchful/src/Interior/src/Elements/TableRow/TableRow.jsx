import React from 'react';


import { BasicTable } from 'react-email-components-table';

// TODO: add styles as props from the outside
const BasicTableRow = ({children}) => (

  <BasicTable>

    {children}

  </BasicTable>

);

export default BasicTableRow;
