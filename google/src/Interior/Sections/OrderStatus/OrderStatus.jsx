import React from 'react';

import { BasicTable } from 'react-email-components-table';
import { 
    Image, ImageLink
} from 'react-emails-components-miscellaneous';


//TODO move meta stuff into a separated component with dangerousHTML

const OrderStatus = ({children}) => (


    <table width="100%" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0;border-top: solid 1px #dddddd; border-bottom: solid 1px #dddddd;border-left: solid 1px #dddddd;border-right: solid 1px #dddddd; width: 100%; max-width: 552px;" cellpadding="0" cellspacing="0">
        <tbody><tr><td style="margin:0; padding:0; background:#fafafa;">

                <table width="100%" align="center" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; text-align:center; width:100%;" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                        <td colspan="3" width="24" align="center" style="border-collapse:collapse; border-spacing:0; padding-top: 25px; width:24px; text-align:center;">
                            <Image src="https://services.google.com/fh/files/emails/shippment_confirmation_email_arrows.jpg" alt="Checkmark" width="488" />    
                            
                        </td>
                       </tr>
                       <tr>
                            <td width="151" dir="ltr" style="border-collapse:collapse;border-spacing:0; color:#444444; font-family:'Roboto', arial; font-size:12px; line-height:16px; text-align:left;    padding-left: 31px; width:151px;padding-right: 11px;padding-bottom:19px;">Ordered<br/>Oct 24</td>
                            <td width="162" dir="ltr" style="border-collapse:collapse;border-spacing:0;color:#444444;font-family:'Roboto', arial;font-size:12px;line-height:16px;text-align:center;width: 162px; padding-bottom:19px;">Shipped<br/>Oct 30</td>
                            <td width="162" dir="ltr" align="left" style="border-collapse:collapse; border-spacing:0; color:#444444; font-family:'Roboto', arial; font-size:12px; line-height:16px; text-align:right; width:162px;padding-right: 31px;padding-bottom:19px; font-weight: bold;">
                            Delivered<br/>Nov 01
                            </td>
                        </tr>
                    </tbody>
                </table>


                </td>
            </tr>

            <tr>
<td bgcolor="#ffffff" style=" padding-top: 20px; padding-bottom:25px;   background-color: #ffffff;">
<div itemscope="" itemtype="http://schema.org/ParcelDelivery">
        <div itemprop="deliveryAddress" itemscope="" itemtype="http://schema.org/PostalAddress">
        <meta itemprop="name" content="Smiles Davis"/>
            <meta itemprop="streetAddress" content="600 Montgomery St"/>
            <meta itemprop="addressLocality" content="San" francisco=""/>
            <meta itemprop="addressRegion" content="CA"/>
            <meta itemprop="addressCountry" content="United States"/>
            <meta itemprop="postalCode" content="94111"/>
        </div>
        <div itemprop="itemShipped" itemscope="" itemtype="http://schema.org/Product">
            <meta itemprop="name" content="Google Home Mini (Chalk)"/>
            <meta itemprop="image" content="https://lh3.googleusercontent.com/UQdT2kDIPDb65JrhGxh0ViEAe4v-IYH9Ndmo8fGcvyx3dpDq8KxF8wQMKTt0INYQpYjK"/>
        </div>
        <div itemprop="carrier" itemscope="" itemtype="http://schema.org/Organization">
            <meta itemprop="name" content="FedEx Smartpost"/>
        </div>
        <meta itemprop="trackingNumber" content="74890988031574503941"/>
        <link itemprop="trackingUrl" href="https://www.fedex.com/Tracking?action=track&amp;language=english&amp;cntry_code=us&amp;tracknumbers=74890988031574503941"/>
        <div itemprop="potentialAction" itemscope="" itemtype="http://schema.org/TrackAction">
            <link itemprop="target" href="https://www.fedex.com/Tracking?action=track&amp;language=english&amp;cntry_code=us&amp;tracknumbers=74890988031574503941"/>
        </div>
         <meta itemprop="price" content="$0.00"/>
        <link itemprop="hasDeliveryMethod" href="https://schema.org/ParcelService"/>
        <div itemprop="partOfOrder" itemscope="" itemtype="http://schema.org/Order">
            <meta itemprop="orderNumber" content="SMLS.6500-5000-0050"/>
            <meta itemprop="price" content="$0.00"/>
            <meta itemprop="priceCurrency " content="USD"/>
            <div itemprop="merchant" itemscope="" itemtype="http://schema.org/Organization">
            <meta itemprop="name" content="Google Store"/>
            <meta itemprop="price" content="$0.00"/>
            <link itemprop="sameAs" href="https://store.google.com/"/>
            </div>
            <link itemprop="orderStatus" href="https://schema.org/OrderDelivered"/>
        </div>
    </div>
	<div itemscope="" itemtype="http://schema.org/Order">
        <meta itemprop="orderNumber" content="SMLS.6500-5000-0050"/>
            <span itemprop="merchant" itemscope="" itemtype="http://schema.org/Organization"> 
                <meta itemprop="name" content="Google Store"/> 
            </span>


		   <table bgcolor="#ffffff" width="100%" align="center" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; text-align:center; width:100%; background:#ffffff;   margin: 0 auto;" cellpadding="0" cellspacing="0" id="itemDetails">
					<tbody>
                        <tr itemprop="acceptedOffer" itemscope="" itemtype="http://schema.org/Offer">
                            <td rowspan="2" width="34" style="vertical-align: top;border-collapse:collapse; border-spacing:0;padding-left: 2px; padding-top:1px; padding-bottom: 1px; color:#444444; width: 34px; font-family:Roboto, arial; text-align:left; ">
                                
                                <Image src="https://lh3.googleusercontent.com/UQdT2kDIPDb65JrhGxh0ViEAe4v-IYH9Ndmo8fGcvyx3dpDq8KxF8wQMKTt0INYQpYjK" alt="Google Home Mini (Chalk)" width="100" height="75" />                                                                    

                            </td>
						    <td style="padding-top: 10px;vertical-align: top;">
                          
                          
                          <table width="100%" align="center" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; text-align:center; width:100%;" cellpadding="0" cellspacing="0">
                  <tbody><tr><td dir="ltr" width="330" style="border-collapse:collapse; border-spacing:0;  padding-bottom:6px; line-height:16px; color:#3C4043; font-family:Roboto, arial; font-size:14px; text-align:left; vertical-align: middle;" itemprop="itemOffered" itemscope="" itemtype="http://schema.org/Product"><span itemprop="name" style="line-height: 20px;">Google Home Mini (Chalk)</span>
                  <meta itemprop="image" content="https://lh3.googleusercontent.com/UQdT2kDIPDb65JrhGxh0ViEAe4v-IYH9Ndmo8fGcvyx3dpDq8KxF8wQMKTt0INYQpYjK" />
                      </td></tr>
                          <tr><td dir="ltr" width="330" style="border-collapse:collapse; border-spacing:0;  padding-bottom:12px; line-height:13px; color:#666666; font-family:Roboto, arial; font-size:11px; text-align:left; vertical-align: middle;" itemprop="itemOffered" itemscope="" itemtype="http://schema.org/Product">ID number:<br/><span style="word-break: break-all;">6500500050</span><br/> </td></tr>


                </tbody></table></td>
						<td style="vertical-align: top;padding-top: 12px;">
                            
                            <table width="100%" align="center" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; text-align:center; width:100%;" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>

						                <td dir="ltr" width="81" style="border-collapse:collapse; border-spacing:0; line-height:15px; color:#444444; font-family:Roboto, arial; font-size:12px; text-align:right; vertical-align: middle; width:81px;"><span itemprop="price">$49.00</span>
                                        <span itemprop="seller" itemscope="" itemtype="http://schema.org/Organization"> <meta itemprop="name" content="Google Inc."/> </span></td></tr>
					        <tr>
                                <td dir="ltr" width="81" style="width:81px; border-collapse:collapse; border-spacing:0; line-height:15px; color:#444444; font-family:Roboto, arial; font-size:12px; text-align:right; vertical-align: top;padding-top: 16px; white-space:nowrap;">Quantity: 1</td></tr>
                                </tbody>
                        </table>
                </td>
				<td dir="ltr" width="33" style="width:33px;"></td>
				</tr>


             <tr itemprop="acceptedOffer" itemscope="" itemtype="http://schema.org/Offer">
               <td colspan="2" style="padding-left: 1px;">

  
               </td></tr></tbody></table>

         
				</div></td></tr>

                <tr>
                    <td style="padding-top:28px; padding-bottom:27px; border-top: solid 1px #eeeeee;   background-color: #ffffff;">
    
                    <table width="100%" align="left" style="-premailer-cellpadding:0; -premailer-cellspacing:0; border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; text-align:left; width:100%;" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td dir="ltr" width="32" style="width:32px;"></td>
                                <td dir="ltr" width="25" style="border-collapse:collapse;border-spacing:0; color:#444444; font-family:arial; font-size:12px; line-height:16px; text-align:left; ">
                                    

    {/*
                                    <a href="https://www.fedex.com/apps/fedextrack/?action=track&amp;action=track&amp;cntry_code=us&amp;language=english&amp;tracknumbers=74890988031574503941" target="_blank" style="color:#006bf2; text-decoration: none;">
                                        
                                        <img src="https://services.google.com/fh/files/emails/truck.jpg" alt="Truck" width="22" height="16">

                                    </a>
    */}


                                    </td>
                                <td dir="ltr" width="463" style="border-collapse:collapse;border-spacing:0; color:#444444; font-family:'Roboto', arial; font-size:14px; line-height:16px; text-align:left; padding-left: 14px; vertical-align: top; font-weight:bold;">
                                    
                                    <a href="https://www.fedex.com/apps/fedextrack/?action=track&amp;action=track&amp;cntry_code=us&amp;language=english&amp;tracknumbers=74890988031574503941" target="_blank" style="color:#444444; text-decoration: none;font-weight:bold;">
                                        Track Shipment
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td></tr>
            </tbody>
        </table>
);

export default OrderStatus;