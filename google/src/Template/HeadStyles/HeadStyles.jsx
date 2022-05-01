import React, { Fragment } from 'react';


const StylesWithComments = () => (
  <Fragment dangerouslySetInnerHTML={{__html: `
    
    <!--[if mso]>
    <style> 
    td.outlook_padding
    {padding-top: 33px;}
    </style>
    <![endif]-->

    <!--[if mso]>
    <style>
    span,
    td,
    table,
    div,
    a,
    p {
      font-family: Arial, serif !important;
    }
    </style>
    <![endif]-->
  `}}>

  </Fragment>
)

const HeadStyles = () => (
  <Fragment>


    <style dangerouslySetInnerHTML={{__html: `
      td.cta_inbox div a.cta_btn_width {
        padding: 11px 0 11px 0 !important;
      }
      td.edit_button div a.cta_btn_width {
        padding: 7px 0 7px 0 !important;
      }
    `}}></style>
  
    <style dangerouslySetInnerHTML={{__html: `
    .unlink_text,
    .unlink_text a,
    .unlink_text a:-webkit-any-link {
      cursor: text !important;
      color: #777777 !important;
    }
    .unlink_text,
    .unlink_text strong,
    .unlink_text span,
    .unlink_text font {
      cursor: text !important;
      color: #777777 !important;
      text-decoration: none !important;
    }
    a {
      text-decoration: none !important;
    }
    `}}></style>





<style dangerouslySetInnerHTML={{__html: `
   .appleLinksWhite a {
    color: #898989 !important;
    text-decoration: none !important;
    cursor: default !important;
    pointer-events: none !important;
  }
  @media screen and (max-width: 599px) {
    div[class=display] {
      display: none !important;
    }
  }
  @media screen and (max-width: 320px) {
    div[class=display] {
      display: none !important;
    }
  }
  @media screen and (max-width: 375px) {
    div[class=display] {
      display: none !important;
    }
  }
`}}>
</style>


<style dangerouslySetInnerHTML={{__html: `
  @media screen and (max-width: 736px) { /*for inbox and nexus gmail*/ u + .body section .gmail-and-inbox{display: none !important;} u + .body u + .gmail-and-inbox{display: block !important;} .cta_btn_width {text-align: center; font-size:11px;} .cta_btn {text-align: center; font-size:11px !important; padding-right:10px;} .cta_btn5 {text-align: center; font-size:11px !important; padding-right:25px;} .cta_inbox {width: 600px !important;} .common-width-nexus{width:552px !important;} .pad-bottom{padding-top:30px !important;} table.footer_menu table td{font-size: 10px !important;} } 
`}}></style>

  <StylesWithComments />

  </Fragment>
);

export default HeadStyles;