import React, { Fragment } from 'react';

import Title from './Title/Title.jsx'
import HeadStyles from './HeadStyles/HeadStyles.jsx'
import ContentLayout from '../Interior/Layouts/ContentLayout/ContentLayout.jsx'


const Template = () => (
    <Fragment>
    {/* <!doctype html public "- / /w3c / /dtd html 4.01 transitional / /en" "http: / /www.w3.org /tr /html4 /loose.dtd"> */}
    {/* <html dir=ltr> */}
        <head>
            {/* <meta http-equiv=Content-Type content="text/html; charset=utf-8"> */}
            {/* <meta name=viewport content="width=device-width, initial-scale=1.0"> */}
            {/* <meta name=format-detection content=telephone=no> */}

            <Title />
            <HeadStyles />
        
        </head>
        <body class="body" dir="ltr" 
        style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background-color:#ffffff; border:0; font-family:arial; font-size:16px; font-weight:normal; margin:0; padding:0;  width:100%;" 
        bgcolor="#ffffff" width="100%">
                            
        <table width="600" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; font-family:Arial, sans-serif; font-weight:normal; margin:auto; mso-table-lspace:0; mso-table-rspace:0; width:600px; min-width:600px; max-width:600px;" 
            align="center" 
            cellpadding="0" 
            cellspacing="0">


            <ContentLayout />


        </table>
        <section>
            <div class="gmail-and-inbox" style="white-space: nowrap; line-height: 0; font-size: 15px; font-weight: normal; font-variant: normal; font-style: normal; font-family: courier; color: #ffffff; width: 474px !important; min-width: 474px !important; max-width: 474px !important;">
            </div>
        </section>
        </body>
    {/* </html> */}
    </Fragment>
);

export default Template;