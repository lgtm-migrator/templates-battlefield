import React from 'react';

import { Link, Unsubscribe } from 'react-emails-components-miscellaneous'; 

const FooterLinksLayout = ({}) => (
    <tr>
        <td align="left" class="body text-secondary">
            You are being contacted because you signed up for Company.
            <br>
                       
            <Unsubscribe href="https://www.example.com" className="body text-primary">Unsubscribe</Unsubscribe> | 
            <Link href="https://www.example.com" className="body text-primary">Privacy Policy</Link> | 
            <Link href="https://www.example.com" className="body text-primary">Support</Link>
                        
        </td>
    </tr>  
);

export default FooterLinksLayout;