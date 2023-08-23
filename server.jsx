import express from 'express';
import { renderToString } from 'react-dom/server';
import { HomePage, notNextServerSideProps } from './app/pages';
import React from 'react';
import { document } from './utils/document';
import path from 'path'

const app = express();
const port = 3000;

// THIS CODE SHOULD BE BEFORE app.get
app.use('/static', express.static(path.join(__dirname)));

app.get('/', async (req, res) => {

  const initialData = await notNextServerSideProps(fetch);

  const htmlContent = renderToString(<HomePage {...initialData.props} />);
  const html = document(htmlContent, initialData.props);

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
