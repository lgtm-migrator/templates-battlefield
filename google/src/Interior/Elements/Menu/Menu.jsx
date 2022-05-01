import React from 'react';

import { BasicTable } from 'react-email-components-table';


import { Link } from 'react-emails-components-miscellaneous';

const Menu = ({children}) => (

<tr>
    <td class="footer_menu" align="left" style=" text-align: center;">
    <table align="left" 
        style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0;border-spacing:0; color:#666666;background:#eeeeee;" 
        border="0" cellpadding="0" cellspacing="0" bgcolor="#eeeeee">
    <tbody>
        <tr>
            <td dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:20px; padding-top:20px;vertical-align: middle; max-width: 80px; width: 80px;padding-right: 10px;font-weight:bold;font-weight:500; text-align: left; " width="80" align="left">

                <Link href="https://accounts.google.com/ServiceLogin?service=googleplay&amp;passive=1209600&amp;continue=https://store.google.com/account?utm_campaign%3DGS100698%26utm_content%3Daccount%26utm_medium%3Demail_service%26utm_source%3Dtransactional&amp;followup=https://store.google.com/account?utm_campaign%3DGS100698%26utm_content%3Daccount%26utm_medium%3Demail_service%26utm_source%3Dtransactional" class="color: #666666; text-decoration: none;" label="Account" />

            </td>

            <td dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:20px; padding-top:20px; vertical-align: middle; max-width:110px; width:110px; font-weight:bold;font-weight:500; text-align: left;padding-right: 10px;" width="110" align="left">

                <Link href="https://store.google.com/authentication" class="color: #666666; text-decoration: none;" label="Order History" />
                
            </td>

            <td dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:20px; padding-top:20px; vertical-align: middle;  padding-right: 0px;max-width: 106px; width: 106px; font-weight:bold; font-weight:500; text-align: left;" width="106" align="left">

                <Link href="https://support.google.com/store/answer/7334136?p=contact_store&amp;utm_campaign=GS100698&amp;utm_content=contactsupport&amp;utm_medium=email_service&amp;utm_source=transactional&amp;visit_id=637212249759899648-1561971305&amp;rd=1" class="color: #666666; text-decoration: none;" label="Contact Us" />                

            </td>

            <td dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:20px; padding-top:20px; vertical-align: middle; max-width: 110px; width: 110px;padding-right: 10px; font-weight:bold; font-weight:500;text-align: left;" width="110" align="left">

                <Link href="https://store.google.com/intl/en-US_us/about/device-terms.html?utm_source=transactional&amp;utm_medium=email_service&amp;utm_campaign=GS100698&amp;utm_content=termsofsale" class="color: #666666; text-decoration: none;" label="Terms of Sale" />

            </td>

            <td class="footnote5" dir="ltr" style="margin:0; padding:0;color:#666666; font-family:'Roboto', arial; font-size:12px; line-height:14px; padding-bottom:20px; padding-top:20px; vertical-align: middle; max-width:110px; width:110px;font-weight:bold; font-weight:500; text-align: left; white-space: nowrap;" width="110" align="left">

                <Link href="https://www.google.com/intl/en/policies/terms/?utm_source=transactional&amp;utm_medium=email_service&amp;utm_campaign=GS100698&amp;utm_content=termsofservice" class="color: #666666; text-decoration: none;" label="Terms of Service" />                

            </td>
        </tr>
    </tbody>
    </table> 

        </td>
    </tr>
);



export default Menu;