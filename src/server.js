import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import endpoints from './endpoints';

const app = express();

// Add critical middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Meta endpoints
app.use('/', endpoints.ping);
app.use('/ping', endpoints.ping);

// Route to the business of this platform!
app.use('/verify/bvn', endpoints.verifyBVN);

// Catch-all error handler
app.use((err, req, res, next) => {
  console.log(err.status, req.path, err.message);
  res.status(err.status || 500).json({
    message: err.message
  });
});

export default app;
