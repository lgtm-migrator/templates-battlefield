import React, { Fragment } from 'react';

import Title from './Title/Title.jsx'
import HeadStyles from './HeadStyles/HeadStyles.jsx'
import ContentLayout from '../Layouts/ContentLayout/ContentLayout.jsx'


const Template = () => (
    <Fragment>

        <html xmlns="&lt;a href='https://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />  

            <Title />
            <HeadStyles />
        </head>
        <body>
            
            <img width="1" height="1" src="https://www.amazon.com/gp/r.html?C=1GDZONJ9HF37K&K=13ROKHMDMTZSV&M=urn:rtn:msg:202007161723172710916fddae456a9989bb09d680p0na&R=H9JHTPH0O3O4&T=O&U=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&H=MMJVHDP4RMLKHKXQKPED4NQROIIA&ref_=pe_386300_440135490_opens" />
            
            <ContentLayout />


        </body>
        </html>

    </Fragment>
);

export default Template;