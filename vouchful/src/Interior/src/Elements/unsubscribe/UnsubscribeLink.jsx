import React from 'react';

import { Unsubscribe } from 'react-emails-components-miscellaneous';

// TODO: add condition for rendering different labels
const UnsubscribeLink = ({href}) => (

    let attributes = {
      href: href,
      class: "body text-primary", 
      label: "Unsubscribe",
    };

   <Unsubscribe {...attributes} /> 

);

export default UnsubscribeLink;
