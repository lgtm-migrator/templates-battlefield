import React, { Fragment } from 'react';

import { 
  ImageLink
} from 'react-emails-components-miscellaneous';

import LogoRow from '../../Sections/LogoRow/LogoRow.jsx';

const HeaderLayout = ({}) => (

<Fragment>
          <table width=600 style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; width:600px;" cellpadding=0 cellspacing=0 bgcolor=#ffffff>
            <tr>
              <td style="border-collapse:collapse; border-spacing:0; padding:0; padding-left:24px; padding-right:24px; padding-top:17px; padding-bottom:45px">
                  

                    <LogoRow />
                


                </td>
            </tr>

          
          <tr>
              <td class=heading_orderonhold width=600 align=left style="border-collapse:collapse; border-spacing:0; color:#666666; font-family:&#39;Roboto&#39;, arial;font-size:32px;font-weight: bold; line-height:38px;padding-bottom:8px;  text-align:left; width:600px; padding-left: 30px;padding-right: 30px;">
                 Hi Smiles Davis,
               </td>
        </tr>
		<tr>
            <td width=600 align=left style="border-collapse:collapse; border-spacing:0; color:#ffffff; font-family:&#39;Roboto&#39;, arial; font-size:14px; line-height:21px; text-align:left; padding-bottom:24px;width:600px;">
                <table width=600 style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0;width:600px" cellpadding=0 cellspacing=0>
                    <tr>
                        <td class=body_orderonhold width=600 dir=ltr style="border-collapse:collapse; border-spacing:0; color:#666666; font-family:&#39;Roboto&#39;, arial; font-size:14px; line-height:21px; text-align:left;padding:0; width: 600px;padding-left: 30px;padding-right: 30px;">
                            Your shipment was just dropped off. Go on. Open it and enjoy.
                        </td>
                    </tr>
                </table>
			</td>
        </tr>
        
    </Fragment>

);

export default HeaderLayout