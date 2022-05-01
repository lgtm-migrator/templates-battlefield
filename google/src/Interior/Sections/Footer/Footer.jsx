import React from 'react';

import { 
  ImageLink
} from 'react-emails-components-miscellaneous';


// import { Table, BasicTable } from 'react-email-components-table';

import Menu from '../../Elements/Menu/Menu.jsx';

const Footer = ({}) => (


    <table width="600" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; width:600px; background:#eeeeee; vertical-align: middle;" valign="top" cellpadding="0" cellspacing="0" bgcolor="#eeeeee" dir="ltr">
        <tbody>
            
            <tr>
                <td align="left" style="margin:0;border-collapse:collapse; border-spacing:0; color:#666666; font-family:'Roboto', arial; font-size:12px; padding-bottom:32px; padding-top:4px; padding-left:40px; padding-right:30px;">
                        
                        <table class="footer_menu" width="530" align="left" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0;border-spacing:0; color:#666666;background:#eeeeee;width:530px;" border="0" cellpadding="0" cellspacing="0" bgcolor="#eeeeee">
                            <tbody>
                                <tr>
                                    <td dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:2px; padding-top:20px;font-weight:normal;font-weight:400;">
                                        You have received this service email to update you about your recent Google Store transaction.
                                    </td>
                                </tr>

						
                      
                            <Menu />    

                       
                        <tr>
                            <td colspan="9" dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:13px; padding-top:4px;font-weight:bold;font-weight:500;">Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043</td>
                        </tr>
                        <tr>
							<td colspan="9" dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:13px; padding-top:4px;font-weight:bold;font-weight:500;">
                              </td>
						</tr>
						<tr>
							<td colspan="9" dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:13px; padding-top:4px;font-weight:bold;font-weight:500;">
                                © 2019 Google | All Rights Reserved.
                            </td>
						</tr>
					</tbody></table>
			  </td>
        </tr>
		</tbody>
    </table>

);

export default Footer;