const next = require('next');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

const app = require('./server/app');

dotenv.config({ path: './config.env' });

// const db = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );

server.prepare().then(() => {
    app.get('*', (req, res) => {
        return handle(req, res);
    });
    app.listen(3000, (req, res) => {});
    // connect mongoose here
});

process.on('uncaughtException', (err) => {
    console.log('Uncaught exception: shutting down the app');
    console.log(err.name, err.message);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION: Shutting down the app');
    server.close(() => {
        process.exit(1);
    });
});
