import React from 'react';
import { renderToString } from 'react-dom/server';
// import your app component containing the html structure.
import App from './App.jsx';
// Get your data as required.
const mainData = {}; 

res.send(
  renderToString(`<!DOCTYPE html>${<App mainData={mainData}/>}`)
);


or https://github.com/facebook/react/issues/1035#issuecomment-701099080