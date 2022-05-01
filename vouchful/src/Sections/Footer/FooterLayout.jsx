import React from 'react';

import { 
  ImageLink
 } from 'react-emails-components-miscellaneous';

import Spacer from '../../inside-content/Spacer';
// import SocialMedia1 from '../..'


import { Table, BasicTable } from 'react-email-components-table';


const Footer = ({}) => (
<tr>
        <td align="left" id="footer">

          <table border="0" cellpadding="0" cellspacing="0" role="presentation">

            <tbody> 
              <tr>
                <td align="left">

                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">

                    <tbody>
                      <tr>
                        <td valign="top" width="28">

                          <ImageLink 
                              href="https://www.example.com" 
                              src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" 
                              alt="Icon" 
                              border="0" 
                              alt="Icon" 
                              border="0" 
                          />                        

                        </td>
                        <td width="16"></td>
                        <td valign="top" width="28">

                        <ImageLink 
                              href="https://www.example.com" 
                              src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" 
                              alt="Icon" 
                              border="0" 
                              alt="Icon" 
                              border="0" 
                          />

                        </td>
                        <td width="16"></td>
                        <td valign="top" width="28">
                          
                          <ImageLink 
                              href="https://www.example.com" 
                              src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" 
                              alt="Icon" 
                              border="0" 
                              alt="Icon" 
                              border="0" 
                          />
                          

                        </td>
                        <td width="16"></td>
                        <td valign="top" width="28">

                          <ImageLink 
                              href="https://www.example.com" 
                              src="https://www.vouchful.com/images/email-kit/placeholder-icon.png" 
                              alt="Icon" 
                              border="0" 
                              alt="Icon" 
                              border="0" 
                          />
                          

                        </td>
                      </tr>
                    </tbody>
                  </table>  
                </td>
              </tr>       

              <Spacer /> 
              
              <CopyrightLayout />

              <Spacer />     

              <FooterLayout />

            </tbody>           
          </table>
        </td>
      </tr>
);

export default Footer;