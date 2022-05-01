import React from 'react';

import { styles } from './styles';

// TODO: try prop-types pkg for component attributes
import { Unsubscribe } from 'react-emails-components-miscellaneous';

// TODO: explore other ways to pass properties into it.
// maybe by doing hooks?


// TODO there is a duplicated way to handle it.
// Maybe even to pass this component into some FooterLayouts 
const UnsubscribeRow = ({ hrefUnsub }) => (

  <Unsubscribe href={hrefUnsub} style={styles.unsubscribe} label="unsubscribe" />
  
);

export default UnsubscribeRow;
