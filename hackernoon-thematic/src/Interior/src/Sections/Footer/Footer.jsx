import React from 'react';

// TODO update and re-install this component
import { 
  Copyrights, Address, 
  Unsubscribe, 
  
  NewsletterSponsorshipLink 
} from "react-emails-components-miscellaneous";

import { 
  Table, 
  TableLeft
} from "react-email-components-table"


import SocialMediaLayout from "../SocialMediaLayout/SocialMediaLayout.jsx"


import { styles } from './styles';
import { config } from './config';

const Footer = () => (
  <div>
    <Table
      className="mcnFollowBlock"
      style={styles.followBlock}
    >
      <tbody className="mcnFollowBlockOuter">
        <tr>
          <td align="center" valign="top" style={styles.followBlockInner} className="mcnFollowBlockInner">


            <Table
              className="mcnFollowContentContainer"
              style={styles.followContentContainer}
            >
              <tbody>
                <tr>
                  <td align="center" style={styles.tdCenter}>


                    <Table
                      style={styles.followContent}
                      className="mcnFollowContent"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top" style={styles.tdCenterTop}>
                            
                            <SocialMediaLayout />


                          </td>
                        </tr>
                      </tbody>
                    </Table>

                  </td>
                </tr>
              </tbody>
            </Table>

          </td>
        </tr>
      </tbody>
    </Table>

    <Table
      className="mcnTextBlock"
      style={styles.textBlock}
    >
      <tbody className="mcnTextBlockOuter">
        <tr>
          <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>
            <Table
              align="left"
              style={styles.textContentContainer}
              className="mcnTextContentContainer"
            >
              <tbody>
                <tr>
                  <td valign="top" className="mcnTextContent" style={styles.textContent}>

                    <Copyrights />
                    <br />
                    <Address />
                    <br />
                    <Unsubscribe />
                    <NewsletterSponsorshipLink />

                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Footer;
