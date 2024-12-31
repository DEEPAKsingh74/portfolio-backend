import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/config';
import { errorHandler } from './utils/response_handler/error_handler/Error';
import mainRoute from './routes/main_route';

const app = express();
const server = createServer(app);

// =============================
// Step 2: Set up cors
// =============================

const corsOptions = {
    origin: ['*'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  };
  
  app.use(cors(corsOptions));

// =============================
// Step 3: Enable request parsing middleware
// =============================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =============================
// Step 4: Implement request logging
// =============================

app.use(morgan('combined'));

// =============================
// Step 7: Implement routes middlewares
// =============================

//5 =================  Auth =======================
// import authRoute from './routes/AuthRoutes/AuthRoute';
app.use('/api', mainRoute);


app.get('/health-check', (req, res) => {
	res.json({ status: 'ok', message: "Server is running..", origin: config.allowedOrigin });
});


// =============================
// Step 11: Implement error handling middleware
// =============================

app.use(errorHandler as express.ErrorRequestHandler);

export default server;