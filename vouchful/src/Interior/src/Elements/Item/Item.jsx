import React from 'react';

import { 
   Link
 } from 'react-emails-components-miscellaneous';

import { BasicTable } from 'react-email-components-table';
import DefaultImage from '../DefaultImage/DefaultImage';
// import Spacer from '../'

const Item = ({}) => (

    <BasicTable>

        <tbody>
        <tr>
            <td align="left" valign="top" width="162" class="column-responsive">

                <BasicTable>
                
                    <tbody>                       
                        <tr>
                            <td>
                                <DefaultImage />                                    
                            </td>
                        </tr>                        
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
                    Donec placerat
                </td>
                </tr>
                <!-- End Text --> 


                <TextBody className="body text-secondary">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed felis neque, consectetur semper efficitur eu.
                </TextBody>

                



                <Spacer />



                <!-- Start Link -->
                <tr>
                <td align="left" class="body text-dark-gray">


                    
                    <Link href="https://www.example.com" className="body text-primary" label="Sed odio" />


                </td>
                </tr>
                <!-- End Link --> 



            </tbody>
    
            </BasicTable>
        </td>
        </tr>
        </tbody>
    
    </BasicTable>

);

export default Item;