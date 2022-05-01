import React from 'react';

import { Table } from 'react-email-components-table';

import { SocialMedia } from 'react-emails-components-miscellaneous';

import styles from "./styles";
import config from "./config";

const SocialMediaLayout = () => {
    
    let links = [
        {
            href: config.twitter,
            src: config.twitterLogo, 
            alt: "Twitter"
        },
        {
            href: config.facebook, 
            src: config.facebookLogo, 
            alt: "Facebook"
        },
        {
            href: config.instagram, 
            src: config.instagramLogo, 
            alt: "Instagram"
        },
        {
            href: config.hn, 
            src: config.hnLogo, 
            alt: "Website"
        },
        {
            href: config.youtube, 
            src: config.youtubeLogo, 
            alt: "YouTube"
        },
        {
            href: config.email, 
            src: config.emailLogo, 
            alt: "Email"
        }        
    ];

    return (
        <Table
            align="center"
            style={styles.tableCenter}
            >
            <tbody>
                <tr>
                    <td align="center" valign="top" style={styles.tdCenterTop2}>
        
                        <SocialMedia links={config.links} component="TableLeft" />

                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default SocialMediaLayout;
