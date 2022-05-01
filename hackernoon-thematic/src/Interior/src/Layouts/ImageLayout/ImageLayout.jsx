import React from 'react';
import { styles } from './styles';

import { ImageLink } from 'react-emails-components-miscellaneous'; 

const ImageLayout = ({ href, src, alt }) => {


  
  return (
      <p dir="ltr" style={styles.ltr}>
        <span style={styles.spanFont}>
          <span style={styles.spanSize}>

            <ImageLink href={href} />


            <a href={href} target="_blank" style={styles.link}>
              <img src={src} style={styles.img} alt={alt} data-testid="imagePropsTest" />
            </a>


          </span>
        </span>
      </p>  
  )
} 


(
  <p dir="ltr" style={styles.ltr}>
    <span style={styles.spanFont}>
      <span style={styles.spanSize}>

        <ImageLink href={href} />


        <a href={href} target="_blank" style={styles.link}>
          <img src={src} style={styles.img} alt={alt} data-testid="imagePropsTest" />
        </a>


      </span>
    </span>
  </p>
);

export default Image;
