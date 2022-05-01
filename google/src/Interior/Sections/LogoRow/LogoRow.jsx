import React from 'react';

import { 
  ImageLink, Logo, 
//   imageProps
} from 'react-emails-components-miscellaneous';

const imageProps = {
    src:"https://www.google.com/images/branding/googleg/2x/googleg_standard_color_32dp.png", 
    alt:"Google Store", 
    width:"32", 
    border:"0",
}

const linkProps = {
    href:"https://store.google.com/?utm_source=transactional&utm_campaign=GS100698&utm_medium=email_service&utm_term=storelogo_en-US&utm_content=_100082566_10040889_1572639866037__US__storelogo_en-US", 
    style:"color: #3267D6; text-decoration: none;", 
    target:"_blank"   
}

const props = {...imageProps, ...linkProps}

const LogoRow = ({}) => (
    <table style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0;" cellpadding="0" cellspacing="0">
        <tr>
            <td width="150" dir="ltr" style="border-collapse:collapse; border-spacing:0; padding:0; padding-top:8px; min-width:150px;">    

                <Logo {...props} />

            </td>

            <td width="400" dir="ltr" style="border-collapse:collapse; border-spacing:0; color:#ffffff; font-family:&#39;Roboto&#39;, arial; font-size:14px; text-align:right; width:400px;"></td>
        </tr>
    </table>
);

export default LogoRow;