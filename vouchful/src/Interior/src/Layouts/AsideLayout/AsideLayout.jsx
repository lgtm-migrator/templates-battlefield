import React from 'react';

import IIImage from '';
import 2 from '';


import HeadingText from '../Typography/heading';

import Text from '../Typography/Text';

import { Link, Image } from 'react-emails-components-miscellaneous';
import { BasicTable } from 'react-email-components-table';

// <!-- Start Aside Layout -->
const AsideLayout = ({}) => (

        <tr>
    <td>
        <BasicTable >
        

        <tbody>
            <tr>
                
            <td align="left" valign="top" width="162" class="column-responsive">

                <BasicTable>
                
                <tbody>

                    {*image*}
                    <Image src= />


                </tbody>
                
                </BasicTable>
            </td>

            <td width="24" class="column-responsive-gutter"></td>

            <td align="left" valign="top" width="348" class="column-responsive column-responsive-last">

                <BasicTable>
                
                <tbody>


                    <!-- Start Text -->
                    <tr>
                    <td align="left" class="heading text-dark-gray">
                        Phasellus feugiat nisi ac sapien 
                    </td>
                    </tr>
                    <!-- End Text --> 


                    <!-- Start Text -->
                    <tr>
                    <td align="left" class="body text-secondary">
                        Sed vestibulum ultrices felis, nec pretium elit porttitor eu. Vestibulum et dolor tellus. Pellentesque vitae consectetur dui.
                    </td>
                    </tr>
                    <!-- End Text -->  


                    {*2*} 


                    

                    <Link href="" />

                </tbody>
                
                </BasicTable>

            </td>
            </tr>
        </tbody>
        
        </BasicTable>

    </td>
    </tr>
                      

);

export default AsideLayout;

// <!-- End Aside Layout -->  

