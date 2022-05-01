import React from 'react';

import { BasicTable } from 'react-email-components-table';

// import Header, Content, Footer from './'


const ContentLayout = ({children}) => (

    <BasicTable>
        {children}
    </BasicTable>
);

export default ContentLayout;