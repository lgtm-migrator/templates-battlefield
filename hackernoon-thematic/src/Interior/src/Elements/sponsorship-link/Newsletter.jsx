import React from 'react';

import { styles } from './styles';

import { config } from './config';

// TODO: moveout contact link and a message to the outside
// should be easy to do

import { Link } from 'react-emails-components-miscellaneous';


const props = {
  href: config.contact,
  style: styles.news
}

const NewsletterSponsorshipLink = () => (
<div style={styles.center}>
  <br />
  <Link {...props}>Click Here To Sponsor A Newsletter by Hacker Noon</Link>
</div>
);

export default SponsorshipLink;
