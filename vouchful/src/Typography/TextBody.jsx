import React from 'react';
// <!-- Start Text -->   
const TextBody = ({children, className}) => (
  <tr>
    <td align="left" class={className}>
      {children}      
    </td>
  </tr>
);

export default TextBody;
// <!-- End Text -->

{/* <td align="left" class="body text-dark-gray"></td> */}