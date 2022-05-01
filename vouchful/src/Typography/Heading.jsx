import React from 'react';

const HeadingText = ({children, className}) => (
   <tr>
    <td align="left" class={className}>
      {children}
    </td>
  </tr>
);

export default HeadingText;


const HeadingOne = () => (

  <HeadingText className="heading text-dark-gray">
    Quisque ut nunc augue 
  </HeadingText>  

);

export default HeadingOne;


const HeadlineThree = ({}) => (
  <HeadingText className="headline-three text-dark-gray">
    January 1, 2020
  </HeadingText>  
);

export default HeadlineThree;

const HeadlineTwo = ({}) => (
  <HeadingText className="headline-two text-dark-gray">
    Your weekly update
  </HeadingText>  
);

export default HeadlineTwo;

