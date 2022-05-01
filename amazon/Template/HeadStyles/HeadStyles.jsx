import React, { Fragment } from 'react';

const HeadStyles = () => (
  <Fragment>

<style dangerouslySetInnerHTML={{__html: `
body {
  margin: 0;
  font: 12px/16px Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #006699;
  font: 14px/16px Arial, sans-serif;
}
a img {
  border: 0;
}
h2 {
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: #000 !important;
}
h3 {
  font-size: 18px;
  color: #cc6600;
  margin: 15px 0 0 0;
  font-weight: normal
}
h4 {
  font-size: 14px;
  margin: 0;
  font-weight: normal;
}
p {
  margin: 1px 0 8px 0;
  font: 12px/16px Arial, sans-serif;
}
table {
  border-collapse: collapse;
}
td {
  vertical-align: top;
  font-size: 13px;
  line-height: 18px;
  font-family: Arial, sans-serif
}
/* container */
#container {
  width: 500px;
  color: #333;
  margin: 0 auto;
}

#main,
#header,
#customerSuggestions,
#summary,
#orderDetails,
#itemDetails,
#selfService,
#closing,
#marketingContent,
#legalCopy,
#multOrder,
#warranty,
#criticalInfo,
#orderDetailsHeader {
  width: 500px;
}
body #warranty p {
  width: 100%;
}

#main .customerSuggestions {
  background-color: #efefef;
  padding: 8px 20px 8px 20px;
}
#main .customerSuggestions a {
  text-decoration: underline;
  color: #006699;
}
#main .customerSuggestions span {
  color: #cc6600;
  font-weight: bold;
}
#main .customerSuggestionsCallOut {
  padding: 0px 0px 0px 50px;
}
#multOrder {
  background-color: #ffffff;
  border-color: #f6f7f8;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-top: 2px solid #f6f7f8;
  border-bottom: 2px solid #f6f7f8;
  border-right: 2px solid #f6f7f8;
  border-left: 2px solid #f6f7f8;
}

#header {
  border-bottom: 1px solid #eaeaea;
  padding-top: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 10px;
}
/* orderDetailsHeader */
#orderDetailsHeader {
  border-bottom: 1px solid #eaeaea;
  padding-left: 0px;
  padding-right: 0px;
}
#logo {}
#title {}
#title p {
  font-size: 20px;
  font-family: "arial", "sans-serif";
}
#amazonLogo {
  width: 107px;
  height: 31px;
}

#greetingSummary {
  width: 100%;
  padding: 0 0 0 0;
  font-size: 14px;
}
#greetingSummary .greeting {
  font-size: 18px;
  line-height: 30px;
  color: #cc6600;
}
#greetingSummary a {
  font-size: 12px;
}
/* critical info */
#criticalInfo {
  border-top: 3px solid #cbcfd4;
  width: 95%;
}
#criticalInfo td {
  font-size: 14px;
}
#criticalInfo .detailsContent {
  background-color: #efefef;
}
#criticalInfo .label {
  color: #666;
}
#criticalInfo p {
  font: 14px Arial, sans-serif;
}
#criticalInfo span {
  font-size: 14px;
  color: #666;
}
#criticalInfo a {
  text-decoration: none;
  color: #006699;
  font: 14px Arial, sans-serif;
}
#criticalInfo .hbaicon {
  padding: 4px;
  vertical-align: text-top;
}
#criticalInfo .hbainfo {
  text-align: left;
  padding-left: 5px;
  padding-right: 0px;
}
#criticalInfo .hbamessage {
  font: 13px Arial, sans-serif;
  color: #000000;
  text-decoration: none;
  line-height: 125%;
}
#criticalInfo .hbahref {
  font: 12px Arial, sans-serif;
  color: #006699;
  text-decoration: none;
  line-height: 150%;
}
#criticalInfo .alexa-shopping-content {
  background-color: rgb(256, 256, 256);
  padding: 0 0 0 0;
}
#criticalInfo .footer {
  background-color: rgb(256, 256, 256);
  padding: 10px 0px 0px 0px;
}
.footer p {
  font: 11px/ 16px Arial, sans-serif;
  color: rgb(51, 51, 51);
}
.deferred-payments-separator {
  border: 1px solid #cbcfd4;
}
/* buttons */
.button {
  text-decoration: none !important;
  display: block;
  height: 26px;
  display: inline-block;
  margin: 0 0 2px 0;
}
.button.small {
  height: 20px;
}
.button .expandable {
  float: left;
  overflow: hidden;
}
.button .text {
  color: #000f68;
  font-size: 12px;
  position: relative;
  z-index: 10;
  top: -22px;
  left: -12px;
  text-align: center;
}
.button.secondary .text {
  left: 0;
}
.button.small .text {
  top: -20px;
  left: 0;
  font-size: 11px;
}
/* supporting details */
#supportingDetails {
  font-size: 11px;
  color: #666;
  line-height: 14px;
  margin: 10px 20px;
}
#supportingDetails {
  margin: 0 18px 0 18px;
}
/* order details */
#orderDetails h3 {
  border-bottom: 1px solid #ccc;
  margin: 0 0 3px 0;
  padding: 0 0 3px 0;
}
#orderDetails .frame {
  padding: 16px 20px 6px 20px;
}
#orderDetails .orderDate {
  color: #666666;
  font-size: 12px;
}
#orderDetails span {
  font-size: 12px;
  color: #666;
}
#orderDetails p {
  margin: 2px 0 9px 0;
}
/* item details */
#itemDetails {
  width: 95%;
}
#itemDetails .photo {
  width: 150px;
  text-align: center;
  padding: 16px 0 10px 0;
}
#itemDetails .photo .play img {
  margin: 3px 0 0 0;
}
#itemDetails .name {
  color: #666;
  padding: 10px 0 10px 10px;
}
#itemDetails ul {
  margin: 0;
  padding: 0;
}
#itemDetails ul li {
  list-style-type: none;
  line-height: 14px;
  padding: 0 0 4px 0;
}
#itemDetails ul li a {
  font-size: 14px;
}
#itemDetails .name p {
  margin: 0;
  padding: 10px 0 0 0;
  font-size: 12px;
  line-height: 16px;
}
#itemDetails .name .share {
  margin: 3px 0 15px 0;
}
#itemDetails .name .share a {
  margin: 4px 5px 0 0;
  font-size: 0;
}
#itemDetails .name .supportingDetails,
#itemDetails .name .supportingDetails a {
  margin: 8px 0 0 0;
  font-size: 12px;
}
#itemDetails .price {
  width: 110px;
  text-align: right;
  font-size: 14px;
  padding: 10px 10px 0 0;
}
#itemDetails .divider {
  border-top: 1px solid #eaeaea;
  padding: 0 0 16px 0;
}
#itemDetails .name table {
  border-collapse: separate;
}
#shippingWeight {
  width: 95%;
}
#shippingWeight td {
  text-align: right;
  line-height: 18px;
  padding: 0 10px 0 0;
}
#shippingWeight .divider {
  border-top: 1px solid #eaeaea;
  padding: 0 0 16px 0;
}
#shippingWeight .shipmentWeightValue {
  width: 120px;
}
/* cost breakdown */
#costBreakdown {
  width: 50%;
}
#costBreakdown td {
  text-align: right;
  line-height: 18px;
  padding: 0 10px 0 0;
}
#costBreakdown td td {
  padding-right: unset !important;
}
#costBreakdown .divider {
  border-top: 1px solid #eaeaea;
  padding: 0 0 16px 0;
}
#costBreakdown .end {
  padding: 0 0 16px 0;
}
#costBreakdown .price {
  font-size: 12px;
  white-space: nowrap;
  /*width:120px;*/
}
#costBreakdown .text {
  font-size: 12px;
  text-align: left;
  white-space: nowrap;
  /*width:120px;*/
}
#costBreakdown .total {
  font-size: 14px;
  text-align: left;
  font-weight: bold;
}
#costBreakdown #costBreakdownRight {
  width: 100%;
  text-align: right;
  line-height: 18px;
  padding: 0 10px 0 0;
}
#costBreakdown #costBreakdownLeft {
  width: 100%;
  text-align: right;
  line-height: 18px;
  padding: 0 10px 0 0;
}
/* additional shipments */
#additionalShipments {
  font-size: 11px;
}
#additionalShipments h3 {
  margin: 10px 0 0 0;
}
#additionalShipments p {
  margin: 10px 20px 0px 20px;
}
#additionalShipments .orderDate {
  color: #666666;
  font-size: 12px;
}
#additionalShipments .details {
  padding: 10px 20px 10px 20px;
}
#additionalShipments .details .label {
  color: #666666;
  font-weight: bold;
}
#additionalShipments .details .edd,
#additionalShipments .details .quantity {
  font-weight: bold;
}
/* self service */
#selfService .divider {
  border-top: 1px solid #ccc;
  padding: 0 0 16px 0;
}
/* closing */
#closing {
  padding: 10px 20px 10px 0;
  border-collapse: none;
  border-bottom: 1px solid #eaeaea;
}
#closing p {
  margin: 0;
  font-size: 14px;
  padding-bottom: 5px;
}
#closing .signature {
  font-size: 14px;
  font-weight: bold;
}
#closing td {
  padding-left: 20px;
}
/* marketing content */
#marketingContent {
  border-bottom: 1px solid #eaeaea;
  border-collapse: separate;
  padding: 5px 0 5px 0;
}
/* legal copy */
#legalCopy {
  padding-top: 9px;
  margin: 0 0 0 0;
}
#legalCopy p {
  font-size: 10px;
  color: #666;
  line-height: 16px;
  padding: 0 0 0px 0px;
  font: 10px;
}
#legalCopy a {
  font-size: 10px;
  font: 10px;
}
/* reg fee */
#regFee td {
  colspan: 2;
  border-top: 1px solid #ccc;
}
.buttonComponent {
  border-collapse: separate;
  text-decoration: none !important;
  line-height: 47px;
  border-radius: 3px;
  border-style: solid;
  border-color: #CBA957;
  border-width: 1px;
  background: #F0C354 linear-gradient(#F7DEA2, #F0C354) repeat scroll 0% 0%;
  background-color: #ffa723;
  white-space: nowrap;
  min-width: 222px;
  min-height: 47px;
}
.buttonComponentLink {
  color: rgb(27, 27, 27) !important;
  font: 16px/ 18px Arial, sans-serif !important;
  display: table-cell;
  margin: auto 0;
  vertical-align: middle;
  min-width: 222px;
  height: 47px;
}
    `}}></style>

<style dangerouslySetInnerHTML={{__html: `
      /* Styling for Amabot top banner content */
      #topAmabotBannerWrapper {
        padding: 0 0 0 0 !important;
      }
      #topAmabotBannerContentTable {
        border-top: 3px solid rgb(256, 256, 256);
        width: 100%;
        background-color: #efefef;
      }
      #topAmabotBannerContentTable td {
        vertical-align: middle;
        width: 100%;
      }
      #topAmabotBannerContentTable #topAmabotBannerLeftImage {
        width: 0%;
        padding: 9px 8px 9px 15px;
      }
      #topAmabotBannerContentTable #topAmabotBannerTextArea {
        padding: 9px 0 9px 0;
        width: 100%;
      }
      #topAmabotBannerContentTable #topAmabotBannerHeader {
        font: bold 14px Arial, sans-serif;
        padding-bottom: 2px;
        color: #333;
      }
      #topAmabotBannerContentTable #topAmabotBannerBodyPrefix {
        font: 14px Arial, sans-serif;
        padding-bottom: 2px;
        color: #333;
      }
      #topAmabotBannerContentTable #topAmabotBannerHeaderClickable {
        font: bold 14px Arial, sans-serif;
        padding-bottom: 2px;
        color: #069;
      }
      #topAmabotBannerContentTable #topAmabotBannerBody {
        font: 14px Georgia, serif;
        line-height: 1.2;
        color: #333;
      }
      #topAmabotBannerContentTable #topAmabotBannerBodyEmphasized {
        font: 14px Georgia, serif;
        line-height: 1.2;
        font-style: italic;
        color: #333;
      }
      /* To fix the blue href links in gmail clients */
      .noColorAndTextDecoration a {
        color: #000 !important;
        text-decoration: none !important;
      }
    `}}></style>


  </Fragment>
);

export default HeadStyles;